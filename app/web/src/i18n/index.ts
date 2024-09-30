import { useI18n as _useI18n, createI18n } from 'vue-i18n'

export const lngList = Object.values<I18nSchema>(import.meta.glob('./locales/*.ts', {
  eager: true,
  import: 'default',
}))

const messages = <{ [key in string]: I18nSchema }>{}

lngList.forEach(schema => messages[schema.meta.name] = schema)

const i18n = createI18n<[I18nSchema], string>({
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  legacy: false,
  messages,
})

export function i18nt(key: I18nSchemaKey) {
  return i18n.global.t(key)
}

export function useI18n() {
  return _useI18n<[I18nSchema], string>()
}

export default i18n
