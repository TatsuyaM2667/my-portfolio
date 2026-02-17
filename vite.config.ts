import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' // 追加

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 追加
  ],
  server: { host: true }
})