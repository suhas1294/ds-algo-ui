import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ds-algo-ui',
  plugins: [reactRefresh(), svgrPlugin({
    svgrOptions: {
      icon: true
    },
  })],
  build: {
    outDir: './build'
  }
})
