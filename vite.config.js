import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ds-algo-ui',
  plugins: [reactRefresh()],
  build: {
    outDir: './build'
  }
})
