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
