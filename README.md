# FireSchema

**Interactive schema viewer for Firestore databases.**
Like SwaggerUI, but for NoSQL.

Document your Firestore database structure using [JSON Schema](https://json-schema.org/) — the official standard for defining object structures — and visualize it with a beautiful dark-themed UI.

![FireSchema Screenshot](https://raw.githubusercontent.com/juanisidoro/firestore-schema-viewer/main/public/screenshot.png)

## Why FireSchema?

- **Firestore has no built-in schema documentation.** FireSchema fills that gap.
- **JSON Schema is an open standard** — not a proprietary format. Your schemas are portable and IDE-compatible.
- **Zero backend required** — it's a static SPA. Drop the files and open in a browser.
- **One file per collection** — folder structure mirrors your Firestore hierarchy 1:1.

## Quick Start

### 1. Create your schema files

Create a `schemas/` folder in your project. Each `.schema.json` file represents one Firestore collection:

```
schemas/
├── users.schema.json                → /users/{userId}
├── users/
│   └── orders.schema.json           → /users/{userId}/orders/{orderId}
└── products.schema.json             → /products/{productId}
```

**The folder structure mirrors Firestore.** Subcollections go inside a folder named after the parent collection. Firestore paths are inferred automatically — you never write them manually.

Example `schemas/users.schema.json`:

```json
{
  "$schema": "https://raw.githubusercontent.com/juanisidoro/firestore-schema-viewer/main/schema/collection.schema.json",
  "collection": "users",
  "description": "Application users",
  "documentCount": 1500,
  "schema": {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "object",
    "properties": {
      "email": { "type": "string", "format": "email" },
      "displayName": { "type": "string" },
      "role": { "type": "string", "enum": ["admin", "editor", "viewer"] },
      "createdAt": { "type": "string", "format": "date-time" }
    },
    "required": ["email", "displayName", "role"]
  }
}
```

> **Tip:** The `$schema` line at the top gives you autocomplete and validation in VS Code.

### 2. Create the viewer page

Create an `index.html` next to your `schemas/` folder. Pick one of the setup options below:

---

## Setup Options

### Option A: CDN (recommended — zero install)

No dependencies, no `node_modules`. Just an HTML file:

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Database Schema</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/firestore-schema-viewer-dist@0.1/style.css">
</head>
<body>
  <div id="schema-viewer"></div>
  <script src="https://cdn.jsdelivr.net/npm/firestore-schema-viewer-dist@0.1/fsv.umd.js"></script>
  <script>
    FirestoreSchemaViewer.render('#schema-viewer', {
      title: 'My Project',
      schemas: [
        './schemas/users.schema.json',
        './schemas/products.schema.json'
      ]
    })
  </script>
</body>
</html>
```

Then serve it:

```bash
npx serve .
```

### Option B: Static files via npm (no dependency tree)

Install the dist-only package (3 files, ~725 KB, zero dependencies):

```bash
npm install firestore-schema-viewer-dist
```

Then reference the files in your HTML:

```html
<link rel="stylesheet" href="./node_modules/firestore-schema-viewer-dist/style.css">
<script src="./node_modules/firestore-schema-viewer-dist/fsv.umd.js"></script>
```

### Option C: Full package (for bundler projects)

If your project uses a bundler (Vite, Webpack, etc.):

```bash
npm install firestore-schema-viewer
```

```js
import { render } from 'firestore-schema-viewer'
import 'firestore-schema-viewer/dist/style.css'

render('#schema-viewer', {
  title: 'My App',
  schemas: [
    './schemas/users.schema.json',
    './schemas/products.schema.json'
  ]
})
```

---

## Schema File Format

Each `.schema.json` file has this structure:

| Field | Required | Description |
|---|---|---|
| `collection` | Yes | Collection name (e.g. `"users"`) |
| `schema` | Yes | Standard [JSON Schema](https://json-schema.org/draft/2020-12/schema) object |
| `description` | No | What this collection stores |
| `documentCount` | No | Approximate number of documents |

The `schema` field is plain **JSON Schema draft 2020-12**. You can use all standard features: `type`, `properties`, `required`, `enum`, `format`, `pattern`, `minimum`, `maximum`, nested `object` and `array` types, etc.

## How Paths Are Inferred

You never write Firestore paths manually. They're inferred from the file location:

| File path | Inferred Firestore path |
|---|---|
| `users.schema.json` | `/users/{userId}` |
| `users/orders.schema.json` | `/users/{userId}/orders/{orderId}` |
| `frontend-shops/products.schema.json` | `/frontend-shops/{frontend_shopId}/products/{productId}` |

## API

### `FirestoreSchemaViewer.render(selector, config)`

| Parameter | Type | Description |
|---|---|---|
| `selector` | `string` | CSS selector for the container element |
| `config.title` | `string` (optional) | Title shown in the sidebar header |
| `config.schemas` | `string[]` or `object[]` | URLs to `.schema.json` files, or inline collection objects |

## What You See

- **Sidebar** — navigable tree of all collections and subcollections
- **Stats bar** — total schemas, subcollections, fields, and documents
- **Schema tree** — expandable view of all fields with types, constraints, and descriptions
- **Raw JSON tab** — full JSON Schema source
- **Example generator** — auto-generated example documents from the schema
- **Copy buttons** — one-click copy for paths, empty objects, and examples

## Packages

| Package | What it includes | Dependencies |
|---|---|---|
| [`firestore-schema-viewer`](https://www.npmjs.com/package/firestore-schema-viewer) | Full library (UMD + ES + CSS + source) | React, Radix, etc. |
| [`firestore-schema-viewer-dist`](https://www.npmjs.com/package/firestore-schema-viewer-dist) | Static files only (UMD + CSS) | **None** |

## Roadmap

- **v0.1** (current): Static viewer, dark theme, CDN support
- **Future** (based on demand): CLI tool, hot reload, schema validation, light theme, CI/CD integration

Want a feature? [Open an issue](https://github.com/juanisidoro/firestore-schema-viewer/issues).

## License

MIT
