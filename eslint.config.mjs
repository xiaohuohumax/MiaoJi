import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  typescript: true,
  languageOptions: {
    parserOptions: {
      warnOnUnsupportedTypeScriptVersion: false,
    },
  },
  vue: true,
  ignores: [
    'node_modules',
    'dist',
  ],
  rules: {
    'no-console': 'off',
  },
})
