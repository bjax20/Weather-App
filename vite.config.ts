import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // ✅ Ensures relative paths for assets (fixes mobile + CloudFront issue)
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Listen on all network interfaces
    port: 5173,
  },
})
