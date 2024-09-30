interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_OWNER: string
  readonly VITE_REPO: string
  readonly VITE_GITHUB_TOKEN?: string
  readonly VITE_APP_BASE_URL: string
  readonly VITE_LOGGER_LEVEL: import('loglevel').LogLevelDesc
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
