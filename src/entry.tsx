import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { loadSchemas, loadSchemasFromDir } from './lib/schema-loader'
import './globals.css'

interface ViewerConfig {
  title?: string
  schemasDir?: string
  schemas?: string[] | object[]
}

async function render(selector: string, config: ViewerConfig) {
  const el = document.querySelector(selector)
  if (!el) throw new Error(`[FSV] Element not found: ${selector}`)

  let collections
  if (config.schemasDir) {
    collections = await loadSchemasFromDir(config.schemasDir)
  } else if (config.schemas && config.schemas.length > 0) {
    collections = await loadSchemas(config.schemas)
  } else {
    throw new Error('[FSV] Provide either "schemasDir" or "schemas" in the config.')
  }

  createRoot(el).render(
    React.createElement(App, { collections, title: config.title })
  )
}

export { render }
;(window as any).FirestoreSchemaViewer = { render }
