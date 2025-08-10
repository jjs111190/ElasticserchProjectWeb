import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // GitHub Pages에 배포할 경우 리포지토리 이름으로 base 경로 설정
  base: '/ElasticserchProjectWeb/', // ⚠️ 레포지토리 이름에 맞게 변경
});