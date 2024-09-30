import type { components } from '@octokit/openapi-types'
import type { PageParams } from '../api'
import { Api } from '../api'

export type Comment = components['schemas']['issue-comment']

export type CommentPageParams = PageParams & {
  issue_number: number
}

export class CommentApi extends Api {
  async page(params: CommentPageParams): Promise<Comment[]> {
    return this.meta.octokit.rest.issues.listComments({
      owner: this.meta.owner,
      repo: this.meta.repo,
      ...params,
    }).then(res => res.data)
  }
}
