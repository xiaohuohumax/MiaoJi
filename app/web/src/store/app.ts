import type { MenuOption } from 'naive-ui'
import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface'
import type { FunctionalComponent, Raw, SVGAttributes } from 'vue'
import { logger, markdown, steam } from '@xiaohuohumax/miaoji-util'
import awaitTo from 'await-to-js'
import { darkTheme, lightTheme } from 'naive-ui'
import { defineStore } from 'pinia'
import { h, markRaw } from 'vue'
import { RouterLink } from 'vue-router'
import type { Issue } from '~/api/module/issue'
import issueApi from '~/api/module/issue'
import type { Label } from '~/api/module/label'
import labelApi from '~/api/module/label'
import appConfig from '~/app.config'
import { i18nt, lngList } from '~/i18n'
import { IBrightnessDown, IMoonF } from '~/icons'
import { RouteName } from '~/router/routes'

interface Menu {
  name: I18nSchemaKey
  routerName: RouteName
  label?: string
}

type themeName = 'light' | 'dark'

interface Theme {
  name: themeName
  naiveTheme: BuiltInGlobalTheme
  icon: Raw<FunctionalComponent<SVGAttributes>>
}

interface AppState {
  banners: markdown.MarkdownImage[]
  labels: Label[]
  dMenus: Menu[]
  themes: Theme[]
  themeIndex: number
  issueCache: Map<number, Issue>
  language: string
}

const themes: Theme[] = [
  {
    name: 'light',
    naiveTheme: lightTheme,
    icon: markRaw(IBrightnessDown),
  },
  {
    name: 'dark',
    naiveTheme: darkTheme,
    icon: markRaw(IMoonF),
  },
]

const uThemeName: themeName = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    banners: [],
    labels: [],
    dMenus: [
      {
        name: 'menu.tag',
        routerName: RouteName.Tag,
      },
      {
        name: 'menu.message',
        routerName: RouteName.Message,
        label: appConfig.funcLabels.message,
      },
      {
        name: 'menu.link',
        routerName: RouteName.Link,
        label: appConfig.funcLabels.link,
      },
      {
        name: 'menu.history',
        routerName: RouteName.History,
        label: appConfig.funcLabels.history,
      },
      {
        name: 'menu.album',
        routerName: RouteName.Album,
        label: appConfig.funcLabels.album,
      },
      {
        name: 'menu.about',
        routerName: RouteName.About,
        label: appConfig.funcLabels.about,
      },
    ],
    themes,
    themeIndex: themes.findIndex(theme => theme.name === uThemeName),
    issueCache: new Map(),
    language: navigator.language,
  }),
  actions: {
    async loadAllLabels() {
      const [err, data] = await awaitTo(labelApi.all())
      if (!err) {
        this.labels = data
      }
      else {
        logger.error('Load all labels error:', err)
      }
    },
    async loadBanners() {
      const [err, data] = await awaitTo(issueApi.page({
        page: 1,
        per_page: 30,
        labels: appConfig.funcLabels.banner,
      }))
      if (!err) {
        this.banners = data
          .filter(issue => issue.body)
          .map(issue => markdown.parseImages(issue.body!))
          .flat()
      }
      else {
        logger.error('Load banners error:', err)
      }
    },
    async initLoad() {
      await Promise.all([
        this.loadAllLabels(),
        this.loadBanners(),
      ])
    },
    hasLabel(label: string): boolean {
      return this.labels.some(l => l.name === label)
    },
    toggleTheme() {
      this.themeIndex = (this.themeIndex + 1) % this.themes.length
    },
    updateIssueCaches(issues: Issue[]) {
      issues.forEach(issue => this.issueCache.set(issue.number, issue))
    },
    getIssueCache(id: number) {
      return this.issueCache.get(id)
    },
    toggleLanguage() {
      const index = lngList.findIndex(lang => lang.meta.name === this.language)
      const nextIndex = (index + 1) % lngList.length
      this.language = lngList[nextIndex].meta.name
    },
  },
  getters: {
    menuOptions(state): MenuOption[] {
      return state.dMenus.filter((menu) => {
        return menu.label
          ? state.labels.some(label => label.name === menu.label)
          : true
      }).filter(steam.filterNullFunc).map((menu) => {
        return {
          label: () => h(
            RouterLink,
            {
              to: { name: menu.routerName },
              // class: 'hover:!text-orange-500 dark:hover:!text-green-300',
            },
            { default: () => i18nt(menu.name) },
          ),
          key: menu.routerName,
        }
      })
    },
    theme(state) {
      return state.themes[state.themeIndex]
    },
    loadLabelsFinished(state) {
      return state.labels.length > 0
    },
  },
  persist: {
    key: `${appConfig.appName}-store-${appConfig.version}`,
    paths: ['language', 'themeIndex'],
  },
})
