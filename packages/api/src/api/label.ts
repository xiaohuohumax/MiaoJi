import type { components } from '@octokit/openapi-types'
import type { PageParams } from '../api'
import { Api } from '../api'

export type Label = components['schemas']['label']

export type LabelPageParams = PageParams & {}

export interface LabelSearchParams {
  keyword: string
  commands: Record<string, string>
}

export interface LabelCreateParams {
  name: string
  color?: string
  description?: string
}

export interface LabelDeleteParams {
  name: string
}

export type LabelUpdateParams = LabelCreateParams & {
  new_name?: string
}

export class LabelApi extends Api {
  async page(params: LabelPageParams): Promise<Label[]> {
    return (await this.meta.octokit.rest.issues.listLabelsForRepo({
      owner: this.meta.owner,
      repo: this.meta.repo,
      ...params,
    })).data
  }

  async all(): Promise<Label[]> {
    const labels: Label[] = []
    let page = 1
    const per_page = 100
    for (; ;) {
      const data = await this.page({ page: page++, per_page })
      labels.push(...data)
      if (data.length < per_page) {
        break
      }
    }
    return labels
  }

  async create(params: LabelCreateParams): Promise<Label> {
    return (await this.meta.octokit.rest.issues.createLabel({
      owner: this.meta.owner,
      repo: this.meta.repo,
      ...params,
    })).data
  }

  async delete(name: string) {
    await this.meta.octokit.rest.issues.deleteLabel({
      owner: this.meta.owner,
      repo: this.meta.repo,
      name,
    })
  }

  async get(name: string): Promise<Label> {
    return (await this.meta.octokit.rest.issues.getLabel({
      owner: this.meta.owner,
      repo: this.meta.repo,
      name,
    })).data
  }

  async update(params: LabelUpdateParams): Promise<Label> {
    return (await this.meta.octokit.rest.issues.updateLabel({
      owner: this.meta.owner,
      repo: this.meta.repo,
      ...params,
    })).data
  }
}
