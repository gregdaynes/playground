// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: './',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
        }
      }
    }
  }
})
