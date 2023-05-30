import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': './' // Adjust this path based on your project's structure
    }
  },
  build: {
    assetsDir: './'
  }
})
