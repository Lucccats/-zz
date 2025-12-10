import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ 极其重要：请将下面的 'arix-signature-tree' 换成你 GitHub 仓库的实际名字
  // 如果你的仓库链接是 https://github.com/lucccats/my-project
  // 那这里就写 base: '/my-project/'
  base: '/zz/', 
})
