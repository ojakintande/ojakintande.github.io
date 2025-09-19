import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Use relative paths for GitHub Pages
  build: {
    outDir: 'docs', // Changed from 'dist' to 'docs'
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