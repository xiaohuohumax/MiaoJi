import type { components } from '@octokit/openapi-types'
import type { PageParams } from '../api'
import type { Label } from './label'
import { Api } from '../api'

export type Issue = Omit<components['schemas']['issue'], 'labels'> & {
  labels: Label[]
}

export type IssueSearch = components['schemas']['issue-search-result-item']

export type IssuePageParams = PageParams & {
  labels: string
}

export type IssueAllParams = Omit<IssuePageParams, 'page' | 'per_page'>

export type IssueSearchParams = PageParams & {
  keyword: string
  commands: Record<string, string>
}

export class IssueApi extends Api {
  async page(params: IssuePageParams): Promise<Issue[]> {
    return (await this.meta.octokit.rest.issues.listForRepo({
      owner: this.meta.owner,
      repo: this.meta.repo,
      state: 'all',
      ...params,
    })).data as Issue[]
  }

  async all(params: IssueAllParams): Promise<Issue[]> {
    const issues: Issue[] = []
    let page = 1
    const per_page = 100
    for (; ;) {
      const data = await this.page({
        ...params,
        page: page++,
        per_page,
      })
      issues.push(...data)
      if (data.length < per_page) {
        break
      }
    }
    return issues
  }

  async search(params: IssueSearchParams): Promise<IssueSearch[]> {
    const qs = [
      `repo:${this.meta.owner}/${this.meta.repo}`,
      `is:issue`,
      ...Object.entries(params.commands).map(([k, v]) => `${k}:${v}`),
      params.keyword,
    ]
    return (await this.meta.octokit.rest.search.issuesAndPullRequests({
      page: params.page,
      per_page: params.per_page,
      q: qs.join(' '),
    })).data.items
  }

  async get(issue_number: number): Promise<Issue> {
    return (await this.meta.octokit.rest.issues.get({
      owner: this.meta.owner,
      repo: this.meta.repo,
      issue_number,
    })).data as Issue
  }
}
