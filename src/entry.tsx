import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { loadSchemas } from './lib/schema-loader'
import './globals.css'

interface ViewerConfig {
  title?: string
  schemas: string[] | object[]
}

async function render(selector: string, config: ViewerConfig) {
  const el = document.querySelector(selector)
  if (!el) throw new Error(`[FSV] Element not found: ${selector}`)

  const collections = await loadSchemas(config.schemas)
  createRoot(el).render(
    React.createElement(App, { collections, title: config.title })
  )
}

export { render }
;(window as any).FirestoreSchemaViewer = { render }
