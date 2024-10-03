import { logger } from '@xiaohuohumax/miaoji-util'
import { createRouter, createWebHashHistory } from 'vue-router'
import { useAppStore } from '~/store/app'
import routes, { RouteName } from './routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
  scrollBehavior(to) {
    if (!to.meta.unScrollToTop) {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, _, next) => {
  logger.debug('Router:', to)
  window.$loadingBar?.start()
  const appStore = useAppStore()
  const { label } = to.meta
  if (label && !appStore.hasLabel(label)) {
    return next({ name: RouteName.NotFound })
  }
  next()
})

router.afterEach(() => window.$loadingBar?.finish())

export default router
