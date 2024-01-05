import { createI18n, useI18n } from 'vue-i18n';

export const langs = Object.values<I18nSchema>(import.meta.glob('./lang/*.ts', { eager: true, import: 'default' }));

const messages = <{ [key in string]: I18nSchema }>{};

langs.forEach((schema) => {
    messages[schema.meta.name] = schema;
});

const i18n = createI18n<[I18nSchema], string>({
    locale: 'zh-CN',
    fallbackLocale: 'zh-CN',
    legacy: false,
    messages
});

export function i18nt(key: I18nSchemaKey) {
    return i18n.global.t(key);
}

export function uI18n() {
    return useI18n<[I18nSchema], string>();
}

export default i18n;