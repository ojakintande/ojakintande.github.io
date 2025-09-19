import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist', // Make sure this says 'dist', not 'docs'
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        inlineDynamicImports: false
      }
    }
  },
  server: {
    port: 3000
  }
})