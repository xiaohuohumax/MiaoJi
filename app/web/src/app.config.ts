import type { FuncLabels } from '@xiaohuohumax/miaoji-func-label'
import { funcLabelPrefix, funcLabelsDefault } from '@xiaohuohumax/miaoji-func-label'
import { homepage, version } from '../package.json'

interface AppConfig {
  appName: string
  version: string
  homepage: string
  repository: string
  perPage: number
  funcLabels: FuncLabels
  funcLabelPrefix: string
}

const appConfig: AppConfig = {
  appName: import.meta.env.VITE_APP_NAME,
  version,
  homepage,
  repository: `https://github.com/${import.meta.env.VITE_OWNER}/${import.meta.env.VITE_REPO}`,
  perPage: 10,
  funcLabels: funcLabelsDefault,
  funcLabelPrefix,
}

export default appConfig
