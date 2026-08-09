import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build lands in ../public (what Express serves). emptyOutDir:false keeps the
// tracked screenshots + snippet.js there. Stale hashed assets from old builds
// accumulate; harmless.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../public',
    emptyOutDir: false,
  },
})
