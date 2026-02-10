# FireSchema — Quick Reference Sheet

## 1. Setup (one time)

```bash
mkdir -p docs/firestore-schemas/schemas
cd docs/firestore-schemas
echo "node_modules/" > .gitignore
```

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Firestore Schemas</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/firestore-schema-viewer-dist@0.2/style.css">
</head>
<body>
  <div id="schema-viewer"></div>
  <script src="https://cdn.jsdelivr.net/npm/firestore-schema-viewer-dist@0.2/fsv.umd.js"></script>
  <script>
    FirestoreSchemaViewer.render('#schema-viewer', {
      title: 'My Project',
      schemas: [
        // Add your schema paths here:
        './schemas/users.schema.json'
      ]
    })
  </script>
</body>
</html>
```

## 2. Folder Structure = Firestore Hierarchy

```
schemas/
├── users.schema.json                    → /users/{userId}
├── users/
│   └── posts.schema.json               → /users/{userId}/posts/{postId}
├── shops.schema.json                    → /shops/{shopId}
└── shops/
    ├── orders.schema.json               → /shops/{shopId}/orders/{orderId}
    └── orders/
        └── items.schema.json            → /shops/{shopId}/orders/{orderId}/items/{itemId}
```

**Rule:** If a subcollection exists (e.g. `shops/orders.schema.json`), the parent schema file MUST also exist (`shops.schema.json`).

## 3. Schema File Template

```json
{
  "$schema": "https://raw.githubusercontent.com/juanisidoro/firestore-schema-viewer/main/schema/collection.schema.json",
  "collection": "collection-name",
  "description": "What this collection stores",
  "schema": {
    "type": "object",
    "required": ["id"],
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "description": "Document ID"
      }
    }
  }
}
```

## 4. Common Field Patterns

```json
// String
"name": { "type": "string", "description": "User name" }

// Nullable string
"avatar": { "type": ["string", "null"], "default": null }

// Email
"email": { "type": "string", "format": "email" }

// URL
"website": { "type": "string", "format": "uri" }

// Timestamp
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
    "city": { "type": "string" },
    "zip": { "type": "string" }
  },
  "required": ["street", "city"]
}

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

// Array of strings
"roles": { "type": "array", "items": { "type": "string" } }

// Firestore Timestamp (native format)
"date_created": {
  "type": "object",
  "description": "Firestore Timestamp",
  "properties": {
    "_seconds": { "type": "integer" },
    "_nanoseconds": { "type": "integer" }
  },
  "required": ["_seconds", "_nanoseconds"]
}

// Optional documentCount (only shown in UI when provided)
// Add to root of .schema.json: "documentCount": 1500
```

## 5. View It

```bash
cd docs/firestore-schemas
npx serve .
# Open http://localhost:3000
```

## 6. Add a New Collection

1. Create the `.schema.json` file in the correct folder
2. If subcollection: verify the parent `.schema.json` exists
3. Add the path to `schemas[]` in `index.html`
4. Refresh the browser

## 7. Checklist for Each Schema

- [ ] File placed in correct folder (mirrors Firestore path)
- [ ] `collection` field matches the Firestore collection name
- [ ] `description` explains what the collection stores
- [ ] All fields have `type` and `description`
- [ ] `required` array lists mandatory fields
- [ ] Parent schema exists if this is a subcollection
- [ ] Path added to `schemas[]` in `index.html`
