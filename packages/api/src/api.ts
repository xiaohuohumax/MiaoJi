import type { components } from '@octokit/openapi-types'
import type { Meta } from './meta'

export interface PageParams {
  per_page?: components['parameters']['per-page']
  page?: components['parameters']['page']
}

export class Api {
  constructor(protected meta: Meta) { }
}
