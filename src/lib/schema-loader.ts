import type { FirebaseCollection, JSONSchema } from "./schema-types"

interface SchemaFile {
  collection: string
  description?: string
  documentCount?: number
  schema: JSONSchema
}

/**
 * Infer the Firestore path from a file path relative to the schemas/ root.
 * "frontend-shops/products.schema.json" → "/frontend-shops/{frontend_shopId}/products/{productId}"
 */
function buildFirestorePath(filePath: string): string {
  return '/' + filePath
    .replace('.schema.json', '')
    .split('/')
    .map((part) => {
      const singular = part.endsWith('s') ? part.slice(0, -1) : part
      const paramName = `${singular}Id`.replace(/-/g, '_')
      return `${part}/{${paramName}}`
    })
    .join('/')
}

/**
 * Build a tree of FirebaseCollection[] from flat schema files.
 * Parent-child relationships are inferred from file paths.
 */
function buildCollectionTree(
  files: Array<{ path: string; content: SchemaFile }>
): FirebaseCollection[] {
  // Sort by depth (parents first)
  const sorted = [...files].sort((a, b) =>
    a.path.split('/').length - b.path.split('/').length
  )

  const collections: FirebaseCollection[] = []
  const pathMap = new Map<string, FirebaseCollection>()

  for (const { path, content } of sorted) {
    const collection: FirebaseCollection = {
      id: content.collection,
      name: content.collection,
      description: content.description || '',
      path: buildFirestorePath(path),
      schema: content.schema,
      subcollections: [],
      updatedAt: new Date().toISOString(),
      documentCount: content.documentCount,
    }

    const parentDir = path.split('/').slice(0, -1).join('/')

    if (!parentDir) {
      collections.push(collection)
    } else {
      // parentDir = "users" → parent file was "users.schema.json"
      const parentKey = parentDir + '.schema.json'
      const parent = pathMap.get(parentKey)
      if (parent) {
        if (!parent.subcollections) parent.subcollections = []
        parent.subcollections.push(collection)
      } else {
        console.warn(`[FSV] Parent collection not found for "${path}". Expected "${parentKey}" to exist.`)
        collections.push(collection)
      }
    }

    pathMap.set(path, collection)
  }

  return collections
}

/** Ensure dirUrl ends with "/" */
function normalizeDir(url: string): string {
  return url.endsWith('/') ? url : url + '/'
}

/**
 * Auto-discover .schema.json files by parsing directory listing HTML.
 * Works with: npx serve, python http.server, http-server, Apache/nginx autoindex.
 * Returns relative paths like "users.schema.json", "users/orders.schema.json".
 *
 * Only reads links inside <li> elements (the file list), skipping breadcrumb/navigation
 * links in headers that would cause false 404s on recursion.
 */
async function discoverFromDirectoryListing(
  dirUrl: string,
  basePath: string = ''
): Promise<string[]> {
  let res: Response
  try {
    res = await fetch(dirUrl)
  } catch {
    return []
  }
  if (!res.ok) return []

  const contentType = res.headers.get('content-type') || ''
  const text = await res.text()
  const discovered: string[] = []

  if (contentType.includes('text/html')) {
    const doc = new DOMParser().parseFromString(text, 'text/html')
    // Only select links inside <li> — this targets the file list and skips
    // breadcrumb links in <header>/<h1> that cause false directory recursion
    const links = Array.from(doc.querySelectorAll('li a'))

    const schemaFiles: string[] = []
    const subdirs: string[] = []

    for (const link of links) {
      const name = (link.textContent || '').trim()
      if (!name || name === '..' || name === '../') continue

      if (name.endsWith('.schema.json')) {
        schemaFiles.push(basePath + name)
      } else if (name.endsWith('/') || link.classList.contains('folder')) {
        const dirName = name.endsWith('/') ? name : name + '/'
        subdirs.push(dirName)
      }
    }

    discovered.push(...schemaFiles)

    // Recurse into subdirectories
    const subResults = await Promise.all(
      subdirs.map(sub => discoverFromDirectoryListing(dirUrl + sub, basePath + sub))
    )
    for (const paths of subResults) {
      discovered.push(...paths)
    }
  }

  return discovered
}

/**
 * Load schema paths from a directory using a 3-step fallback strategy:
 * 1. Auto-discover by parsing directory listing (works with npx serve, python http.server, etc.)
 * 2. Fall back to index.json manifest in the directory
 * 3. Throw error if both fail
 */
export async function loadSchemasFromDir(
  dirUrl: string
): Promise<FirebaseCollection[]> {
  const dir = normalizeDir(dirUrl)

  // Step 1: Try auto-discovery via directory listing
  let schemaPaths = await discoverFromDirectoryListing(dir)

  // Step 2: Fall back to index.json manifest
  if (schemaPaths.length === 0) {
    try {
      const res = await fetch(dir + 'index.json')
      if (res.ok) {
        const manifest = await res.json()
        if (Array.isArray(manifest)) {
          schemaPaths = manifest as string[]
          console.info('[FSV] Loaded schema list from index.json')
        }
      }
    } catch {
      // index.json not found or invalid
    }
  } else {
    console.info(`[FSV] Auto-discovered ${schemaPaths.length} schema(s) from directory listing`)
  }

  if (schemaPaths.length === 0) {
    console.warn('[FSV] No schemas found. Ensure your schemas/ folder contains .schema.json files and your server supports directory listing, or create a schemas/index.json manifest.')
    return []
  }

  // Fetch all discovered schemas
  const files = await Promise.all(
    schemaPaths.map(async (relativePath) => {
      const url = dir + relativePath
      const content = await fetch(url).then((r) => r.json()) as SchemaFile
      return { path: relativePath, content }
    })
  )

  return buildCollectionTree(files)
}

function isSchemaFileArray(input: unknown[]): input is SchemaFile[] {
  return typeof input[0] === 'object' && input[0] !== null && 'schema' in (input[0] as Record<string, unknown>) && 'collection' in (input[0] as Record<string, unknown>)
}

function isCollectionArray(input: unknown[]): input is FirebaseCollection[] {
  return typeof input[0] === 'object' && input[0] !== null && 'path' in (input[0] as Record<string, unknown>) && 'id' in (input[0] as Record<string, unknown>)
}

/**
 * Load schemas from URLs or inline data.
 * - string[] → fetch each URL, parse as SchemaFile, build tree
 * - FirebaseCollection[] → pass through
 */
export async function loadSchemas(
  input: string[] | object[]
): Promise<FirebaseCollection[]> {
  if (input.length === 0) return []

  // Already-built FirebaseCollection objects (inline mode)
  if (isCollectionArray(input as unknown[])) {
    return input as FirebaseCollection[]
  }

  // URLs to fetch
  if (typeof input[0] === 'string') {
    const files = await Promise.all(
      (input as string[]).map(async (url) => ({
        path: url.replace(/^.*schemas\//, ''),
        content: await fetch(url).then((r) => r.json()) as SchemaFile,
      }))
    )
    return buildCollectionTree(files)
  }

  // SchemaFile objects with path info
  if (isSchemaFileArray(input as unknown[])) {
    const files = (input as (SchemaFile & { _path?: string })[]).map((item, i) => ({
      path: (item as any)._path || `${item.collection}.schema.json`,
      content: item,
    }))
    return buildCollectionTree(files)
  }

  return input as FirebaseCollection[]
}
