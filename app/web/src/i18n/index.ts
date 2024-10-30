import type { DefineLocaleMessage } from 'vue-i18n'
import { createI18n } from 'vue-i18n'

export const langs = Object.values<DefineLocaleMessage>(import.meta.glob('./locales/*.ts', {
  eager: true,
  import: 'default',
}))

const i18n = createI18n({
  locale: 'zh-CN',
  messages: langs.reduce((acc, lang) => {
    acc[lang.meta.lang] = lang
    return acc
  }, {} as Record<string, DefineLocaleMessage>),
})

export const t = i18n.global.t.bind(i18n.global)

export default i18n
