import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'investor-data': [
            './src/data/investors/ahl.ts',
            './src/data/investors/deephaven.ts',
            './src/data/investors/loanstream.ts',
            './src/data/investors/verus.ts',
            './src/data/investors/ellington.ts',
            './src/data/investors/onslow_bay.ts',
            './src/data/investors/ad_product.ts',
            './src/data/investors/champions.ts',
            './src/data/investors/investor_solutions.ts',
            './src/data/investors/prime_time.ts',
            './src/data/investors/closed_end_second.ts',
          ],
        },
      },
    },
  },
})
