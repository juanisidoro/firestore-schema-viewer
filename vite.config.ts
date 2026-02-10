import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/entry.tsx'),
      name: 'FirestoreSchemaViewer',
      fileName: (format) => `fsv.${format}.js`,
      formats: ['umd', 'es']
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'style.css'
          return assetInfo.name!
        }
      }
    }
  }
})
