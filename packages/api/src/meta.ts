import { Octokit } from 'octokit'

export interface MetaOptions {
  token?: string
  owner: string
  repo: string
}

export class Meta {
  public octokit: Octokit
  public owner: string
  public repo: string

  constructor(options: MetaOptions) {
    this.octokit = new Octokit({
      auth: options.token,
      // retry: { enabled: false }
    })

    this.owner = options.owner
    this.repo = options.repo
  }
}
