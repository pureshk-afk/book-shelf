import { resolve } from 'path'
import { defineConfig } from 'vite'
import Inspect from "vite-plugin-inspect";

export default defineConfig({
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        product: resolve(__dirname, 'product/index.html'),
        registration: resolve(__dirname, 'registration/index.html'),
        signin: resolve(__dirname, 'signin/index.html'),
      },
    },
  },
})