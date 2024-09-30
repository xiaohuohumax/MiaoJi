import { logger } from '@xiaohuohumax/miaoji-util'
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import appConfig from './app.config'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import { useAppStore } from './store/app'
import title from './util/title'
import 'tailwindcss/lib/css/preflight.css'
import './style/index.css'

async function run() {
  logger.setDefaultLevel(import.meta.env.VITE_LOGGER_LEVEL)
  logger.info(`Welcome to ${appConfig.appName}`)
  logger.info(`Version: ${appConfig.version}`)
  logger.info(`Homepage: ${appConfig.homepage}`)

  title.setTitle()
  const app = createApp(App)

  const pinia = createPinia()
  pinia.use(persistedstate)
  app.use(pinia)
  app.use(i18n)

  const appStore = useAppStore()
  await appStore.initLoad()

  app.use(router)
  app.mount('#app')
}

run().catch()
