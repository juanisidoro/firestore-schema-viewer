import { render } from './entry'

render('#schema-viewer', {
  title: 'My E-Commerce',
  schemas: [
    '/example/schemas/frontend-shops.schema.json',
    '/example/schemas/frontend-shops/products.schema.json',
    '/example/schemas/frontend-shops/products/variations.schema.json',
    '/example/schemas/users.schema.json'
  ]
})
