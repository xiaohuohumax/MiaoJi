import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  envDir: './env',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: 'src/index.ts',
      external: ['path'],
      output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].mjs',
      },
    },
  },
})
