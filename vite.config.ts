import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ 这里必须和你的仓库名 "-zz" 完全一致，前后都要有斜杠
  base: '/-zz/', 
})
