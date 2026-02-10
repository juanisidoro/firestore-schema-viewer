# FireSchema — Quicksheet: npm dist (Option B)

One package (~335 KB), zero sub-dependencies. Works offline (except fonts).

## Step 1: Create the folder structure and install

```bash
mkdir -p docs/database/firebase/schemas
cd docs/database/firebase

npm init -y
npm install --save-dev firestore-schema-viewer-dist
echo "node_modules/" > .gitignore
```

This installs **1 single package (~335 KB)**, with no dependency tree. It contains only `fsv.umd.js` + `style.css` + `index.html`.

```
your-project/
└── docs/database/firebase/
    ├── index.html                    <-- viewer (local files)
    ├── package.json
    ├── .gitignore
    ├── node_modules/                 <-- ignored by git
    └── schemas/                      <-- 1 file per collection
        ├── users.schema.json
        └── users/                    <-- subfolder = subcollection
            └── orders.schema.json
```

## Step 2: Create `index.html`

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Project - Firestore Schemas</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./node_modules/firestore-schema-viewer-dist/style.css" />
</head>
<body>
  <div id="schema-viewer"></div>
  <script src="./node_modules/firestore-schema-viewer-dist/fsv.umd.js"></script>
  <script>
    FirestoreSchemaViewer.render('#schema-viewer', {
      title: 'My Project',
      schemasDir: './schemas/'
    });
  </script>
</body>
</html>
```

## Step 3: Create your schemas (1 file per collection)

The folder structure mirrors your Firestore hierarchy:

```
schemas/
├── users.schema.json                    -> /users/{userId}
├── users/
|   └── orders.schema.json              -> /users/{userId}/orders/{orderId}
├── shops.schema.json                    -> /shops/{shopId}
└── shops/
    └── products.schema.json             -> /shops/{shopId}/products/{productId}
```

**Rule:** If a subcollection exists (e.g. `shops/products.schema.json`), the parent schema file MUST also exist (`shops.schema.json`).

### Schema file template

```json
{
  "$schema": "https://raw.githubusercontent.com/juanisidoro/firestore-schema-viewer/main/schema/collection.schema.json",
  "collection": "collection-name",
  "description": "What this collection stores",
  "schema": {
    "type": "object",
    "required": ["id"],
    "properties": {
      "id": { "type": "string", "description": "Document ID" }
    }
  }
}
```

### Common field patterns

```jsonc
// String
"name": { "type": "string", "description": "User name" }

// Nullable
"avatar": { "type": ["string", "null"], "default": null }

// Email / URL / Timestamp
"email": { "type": "string", "format": "email" }
"website": { "type": "string", "format": "uri" }
"createdAt": { "type": "string", "format": "date-time" }

// Enum
"status": { "type": "string", "enum": ["active", "inactive", "banned"] }

// Number with range
"age": { "type": "integer", "minimum": 0, "maximum": 150 }

// Boolean with default
"isActive": { "type": "boolean", "default": true }

// Nested object
"address": {
  "type": "object",
  "properties": {
    "street": { "type": "string" },
    "city": { "type": "string" }
  },
  "required": ["street", "city"]
}

// Array of strings
"roles": { "type": "array", "items": { "type": "string" } }

// Array of objects
"tags": {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": { "type": "integer" },
      "name": { "type": "string" }
    },
    "required": ["id", "name"]
  }
}

// Firestore Timestamp
"date_created": {
  "type": "object",
  "description": "Firestore Timestamp",
  "properties": {
    "_seconds": { "type": "integer" },
    "_nanoseconds": { "type": "integer" }
  },
  "required": ["_seconds", "_nanoseconds"]
}

// Optional: add "documentCount": 1500 to root (shown in UI only when provided)
```

## Step 4: View it

```bash
cd docs/database/firebase
npx serve .
# -> http://localhost:3000
```

Custom port: `npx serve . -l 8080`

## Adding new collections

1. Create the `.schema.json` file in `schemas/`
2. If subcollection: create the subfolder and ensure parent schema exists
3. Refresh the browser — no need to touch `index.html` (auto-discovery)

## Checklist for each schema

- [ ] File placed in correct folder (mirrors Firestore path)
- [ ] `collection` field matches the Firestore collection name
- [ ] `description` explains what the collection stores
- [ ] All fields have `type` and `description`
- [ ] `required` array lists mandatory fields
- [ ] Parent schema exists if this is a subcollection

## Summary

- **Install**: `npm install --save-dev firestore-schema-viewer-dist`
- **Dependencies**: 1 package, 0 sub-dependencies (~335 KB)
- **`node_modules`**: yes (ignored by `.gitignore`)
- **Files in git**: `index.html` + `schemas/*.schema.json` + `package.json` + `.gitignore`
- **Requires internet**: only for `npm install` and Google Fonts
- **vs CDN**: works offline once installed (except fonts)
