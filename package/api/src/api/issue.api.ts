import { Api, RequestExecutor } from '@miaoji/util';
import { Issue } from '../entry';

interface QPageBase {
    // 仅显示上次在给定时间之后更新的结果(这是ISO8601格式的时间戳) YYYY-MM-DDTHH:MM:SSZ
    since?: string
    // 每页的结果数（最多 100 个）
    // 默认: 30
    per_page?: string
    // 要获取的结果的页码 
    // 默认: 1
    page?: string
}

interface QSortBase {
    // 对结果进行排序的方向 
    // 默认: desc
    direction?: 'asc' | 'desc'
}

type QIssuesParams = QPageBase & QSortBase & {
    // 指示要返回的问题的状态
    // 默认: open
    state?: 'open' | 'closed' | 'all'
    // 创建问题的用户
    creator?: string
    // 问题中提到的用户
    mentioned?: string
    // 逗号分隔的标签名称列表
    labels?: string
    // 对结果进行排序的依据
    sort?: 'created' | 'updated' | 'comments'
}

export class IssueApi extends Api {
    owner: string;
    repo: string;
    constructor(executor: RequestExecutor, owner: string, repo: string,) {
        super(executor);
        this.owner = owner;
        this.repo = repo;
    }
    // 分页查询
    qIssuePage(params: QIssuesParams) {
        return this.request<Issue[]>({
            url: `/repos/${this.owner}/${this.repo}/issues`,
            method: 'GET',
            params
        });
    }
    // 通过 number 查询
    qIssueById(issueNumber: string) {
        return this.request<Issue>({
            url: `/repos/${this.owner}/${this.repo}/issues/${issueNumber}`,
            method: 'GET',
        });
    }
}
