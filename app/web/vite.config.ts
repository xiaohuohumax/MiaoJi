import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import svg from 'vite-svg-loader'

function resolve(...paths: string[]) {
  return path.resolve(__dirname, ...paths)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envDir = 'env'
  const env = loadEnv(mode, envDir)
  return {
    envDir,
    publicDir: resolve('../../public'),
    base: env.VITE_APP_BASE_URL,
    plugins: [vue(), svg({
      defaultImport: 'component',
    })],
    resolve: {
      alias: {
        '@': resolve('src/components/'),
        '~': resolve('src/'),
      },
    },
    build: {
      emptyOutDir: true,
      minify: true,
      chunkSizeWarningLimit: 1500,
      outDir: './dist',
      rollupOptions: {
        input: {
          appConfig: resolve('./src/app.config.ts'),
          index: resolve('./index.html'),
        },
        output: {
          entryFileNames({ name, isEntry }) {
            return isEntry && name === 'appConfig'
              ? 'app.config.[hash].js'
              : 'assets/[name]-[hash].js'
          },
        },
      },
    },
    server: {
      port: 8900,
      host: '0.0.0.0',
    },
  }
})
