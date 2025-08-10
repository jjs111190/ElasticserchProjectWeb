import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ElasticserchProjectWeb/',       // 레포 이름 정확히!
  build: { outDir: 'docs' },              // Pages → docs 선택 시 필수
  optimizeDeps: { exclude: ['lucide-react'] },
})