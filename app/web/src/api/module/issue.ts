import type { Issue, IssueAllParams, IssuePageParams } from '@xiaohuohumax/miaoji-api'
import { IssueApi as Api } from '@xiaohuohumax/miaoji-api'
import { useAppStore } from '~/store/app'
import meta from '../meta'

export type { Issue } from '@xiaohuohumax/miaoji-api'

class IssueApi extends Api {
  public async page(params: IssuePageParams): Promise<Issue[]> {
    const appStore = useAppStore()
    const data = await super.page(params)
    appStore.updateIssueCaches(data)
    return data
  }

  public async all(params: IssueAllParams): Promise<Issue[]> {
    const appStore = useAppStore()
    const data = await super.all(params)
    appStore.updateIssueCaches(data)
    return data
  }

  public async get(issue_number: number): Promise<Issue> {
    const appStore = useAppStore()
    const data = await super.get(issue_number)
    appStore.updateIssueCaches([data])
    return data
  }
}
export default new IssueApi(meta)
