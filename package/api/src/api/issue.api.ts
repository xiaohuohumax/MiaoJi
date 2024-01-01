import { Api, RequestExecutor } from '@miaoji/util';
import { Issue, } from '../entity';
import { QPageBase, QSortBase } from '../query';

export type QIssuesParams = QPageBase & QSortBase & {
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
