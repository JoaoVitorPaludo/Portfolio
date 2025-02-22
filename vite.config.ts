/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    css: false,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/main.tsx/**',
        '**/src/styles/global.ts**',
        '**/src/tests/**',
      ],
    },
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/main.tsx/**',
      '**/src/styles/global.ts**',
    ],
  },
  plugins: [react()],
  server: {
    port: 2764,
  },
})
