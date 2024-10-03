import type { OctokitResponse } from '@octokit/types'
import type { MetaOptions } from '@xiaohuohumax/miaoji-api'
import type { RequestError } from 'octokit'
import { Meta } from '@xiaohuohumax/miaoji-api'
import { logger } from '@xiaohuohumax/miaoji-util'
import { i18nt } from '~/i18n'

class MetaAPI extends Meta {
  private sts: { [key in string]?: number } = {}
  constructor(options: MetaOptions) {
    super(options)
    this.octokit.hook.before('request', (options) => {
      logger.debug(`Request: ${options.method} ${options.url}`)
    })
    // this.octokit.hook.after('request', response => this.handleError(response))
    this.octokit.hook.error('request', (error) => {
      const e = error as RequestError
      if (e.status === 500 && error.message.includes('Failed to fetch')) {
        this.printMessage(i18nt('api.error.network'))
      }
      else if (e.response) {
        this.handleError(e.response as OctokitResponse<{ message: string }>)
      }
      window.$loadingBar?.error()
      throw error
    })
  }

  handleError(response: OctokitResponse<{ message: string }>) {
    switch (response.status) {
      case 401:
        this.printMessage(i18nt('api.error.unauthorized'))
        return
      case 403:
        if (response.data.message && response.data.message.includes('API rate limit')) {
          this.printMessage(i18nt('api.error.rateLimit'))
          return
        }
        this.printMessage(i18nt('api.error.forbidden'))
        return
      case 404:
        this.printMessage(i18nt('api.error.notFound'))
        return
      case 422:
        this.printMessage(i18nt('api.error.unprocessableEntity'))
    }
  }

  printMessage(message: string) {
    if (this.sts[message]) {
      return
    }
    window.$message?.error(message)
    this.sts[message] = window.setTimeout(() => this.sts[message] = undefined, 2000)
  }
}

export default new MetaAPI({
  owner: import.meta.env.VITE_OWNER,
  repo: import.meta.env.VITE_REPO,
  token: import.meta.env.VITE_GITHUB_TOKEN,
})
