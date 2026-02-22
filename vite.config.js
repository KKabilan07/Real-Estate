import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: process.env.VITE_BASE_PATH || "/Real-Estate",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion']
        }
      }
    },
    assetsInlineLimit: 4096,
    minify: 'terser'
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg']
})
