import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Bắt buộc phải có dấu gạch chéo ở đầu và cuối tên repo
  base: '/', 
  plugins: [react()],
})