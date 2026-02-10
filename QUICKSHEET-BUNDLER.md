# FireSchema — Quicksheet: Full Package (Option C)

For projects using a bundler (Vite, Webpack, etc.). Includes full source + ES module.

## Step 1: Install

```bash
npm install firestore-schema-viewer
```

This installs the full package including React, Radix UI, and all dependencies. Use this option only if your project already uses a bundler.

## Step 2: Import and render

```js
import { render } from 'firestore-schema-viewer'
import 'firestore-schema-viewer/dist/style.css'

render('#schema-viewer', {
  title: 'My Project',
  schemasDir: './schemas/'
})
```

Or with explicit schema list:

```js
render('#schema-viewer', {
  title: 'My Project',
  schemas: [
    './schemas/users.schema.json',
    './schemas/users/orders.schema.json',
    './schemas/products.schema.json'
  ]
})
```

## Step 3: Create your schemas (1 file per collection)

The folder structure mirrors your Firestore hierarchy:

```
public/schemas/
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

## Adding new collections

1. Create the `.schema.json` file in `schemas/` (or `public/schemas/` for Vite)
2. If subcollection: create the subfolder and ensure parent schema exists
3. Refresh the browser — auto-discovery handles the rest

## Checklist for each schema

- [ ] File placed in correct folder (mirrors Firestore path)
- [ ] `collection` field matches the Firestore collection name
- [ ] `description` explains what the collection stores
- [ ] All fields have `type` and `description`
- [ ] `required` array lists mandatory fields
- [ ] Parent schema exists if this is a subcollection

## Summary

- **Install**: `npm install firestore-schema-viewer`
- **Dependencies**: React, Radix UI, Lucide (bundled in UMD, tree-shaken in ES)
- **Best for**: projects that already use a bundler and want ES module imports
- **vs CDN/dist**: more control, tree-shaking, but heavier install
