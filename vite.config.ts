import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 下記を追加
  base: process.env.NODE_ENV === 'production' ? '/practice-site/' : './',
  plugins: [vue()],
})
