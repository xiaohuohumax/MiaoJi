interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_OWNER: string
  readonly VITE_REPO: string
  readonly VITE_GITHUB_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
