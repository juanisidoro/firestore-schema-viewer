# firestore-schema-viewer-dist

**Static files only** — zero dependencies. This is the distribution package for [FireSchema](https://github.com/juanisidoro/firestore-schema-viewer).

Use this package when you just need the viewer files without pulling in React, Radix, or any other dependency. Like `swagger-ui-dist` for Swagger.

## Install

```bash
npm install firestore-schema-viewer-dist
```

This installs **only 3 files** (~725 KB total, no `node_modules` tree):
- `fsv.umd.js` — the viewer bundle (React included)
- `style.css` — compiled styles
- `index.html` — template to customize

## Usage

### Option 1: Copy files to your docs folder

```bash
cp node_modules/firestore-schema-viewer-dist/fsv.umd.js docs/
cp node_modules/firestore-schema-viewer-dist/style.css docs/
```

Then create your `docs/index.html`:

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Database Schema</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="schema-viewer"></div>
  <script src="./fsv.umd.js"></script>
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

### Option 2: Reference directly from node_modules

```html
<link rel="stylesheet" href="./node_modules/firestore-schema-viewer-dist/style.css">
<script src="./node_modules/firestore-schema-viewer-dist/fsv.umd.js"></script>
```

Then serve with `npx serve .`

## CDN (no install needed)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/firestore-schema-viewer-dist@0.2/style.css">
<script src="https://cdn.jsdelivr.net/npm/firestore-schema-viewer-dist@0.2/fsv.umd.js"></script>
```

## Full documentation

See the main repo: [github.com/juanisidoro/firestore-schema-viewer](https://github.com/juanisidoro/firestore-schema-viewer)
