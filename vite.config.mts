import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  envPrefix: ['VITE_', 'REACT_APP_'],
  server: { port: 3000 },
  build: { outDir: 'build' },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}']
  }
})
