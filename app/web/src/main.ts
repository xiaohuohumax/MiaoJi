import Shiki from '@shikijs/markdown-it'
import { logger } from '@xiaohuohumax/miaoji-util'
import { full as emoji } from 'markdown-it-emoji'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import { config } from 'md-editor-v3'
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { useAppStore } from '~/store/app'
import appConfig from './app.config'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import title from './util/title'
import 'tailwindcss/lib/css/preflight.css'
import './style/index.css'

async function setMarkdownConfig() {
  const MarkdownItShiki = await Shiki({
    themes: {
      light: 'one-light',
      dark: 'one-dark-pro',
    },
  })

  config({
    markdownItConfig: (md) => {
      md.use(emoji)
      md.use(MarkdownItGitHubAlerts)
      md.use(MarkdownItShiki)
    },
  })
}

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
  appStore.initLoad()

  setMarkdownConfig()

  app.use(router)
  app.mount('#app')
}

run().catch(logger.error)
