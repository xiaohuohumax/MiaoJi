import type { OctokitResponse } from '@octokit/types'
import type { MetaOptions } from '@xiaohuohumax/miaoji-api'
import type { RequestError } from 'octokit'
import { Meta } from '@xiaohuohumax/miaoji-api'
import { logger } from '@xiaohuohumax/miaoji-util'
import i18n from '../i18n'

class MetaAPI extends Meta {
  constructor(options: MetaOptions) {
    super(options)
    this.octokit.hook.before('request', (options) => {
      logger.debug(`Request: ${options.method} ${options.url}`)
    })
    this.octokit.hook.after('request', response => this.handleError(response))
    this.octokit.hook.error('request', (error) => {
      const e = error as RequestError
      if (e.status === 500) {
        logger.error(i18n.t('label:api.error.network'))
        return
      }
      if (e.response) {
        this.handleError(e.response as OctokitResponse<{ message: string }>)
      }
    })
  }

  handleError(response: OctokitResponse<{ message: string }>) {
    switch (response.status) {
      case 401:
        logger.error(i18n.t('label:api.error.unauthorized'))
        return
      case 403:
        if (response.data.message && response.data.message.includes('API rate limit')) {
          logger.error(i18n.t('label:api.error.rateLimit'))
          return
        }
        logger.error(i18n.t('label:api.error.forbidden'))
        return
      // case 404:
      //   logger.error('访问的资源不存在，请检查您的输入是否正确')
      //   return
      case 422:
        logger.error(i18n.t('label:api.error.invalidParams'))
    }
  }
}

export default new MetaAPI({
  owner: import.meta.env.VITE_OWNER,
  repo: import.meta.env.VITE_REPO,
  token: import.meta.env.VITE_GITHUB_TOKEN,
})
