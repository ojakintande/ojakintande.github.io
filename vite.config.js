import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // This is correct for relative paths
  build: {
    outDir: 'dist', // Build to dist, not docs
    sourcemap: false,
  },
  server: {
    port: 3000
  }
})