import type { Resource } from 'i18next'
import process from 'node:process'
import i18next from 'i18next'

export const lngList = Object.values<I18nSchema>(import.meta.glob('./locales/*.ts', {
  eager: true,
  import: 'default',
}))

const resources: Resource = {}
lngList.forEach(schema => resources[schema.meta.name] = { label: schema })

const lng = process.env.LANG || process.env.LANGUAGE || 'en-US'

i18next.init({
  lng: lng.includes('zh') ? 'zh-CN' : 'en-US',
  resources,
  ns: 'label',
})

export default i18next
