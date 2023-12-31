import { Api, RequestExecutor } from '@miaoji/util';
import { Comment } from '../entry';

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

export class CommentApi extends Api {
    private owner: string;
    private repo: string;
    constructor(executor: RequestExecutor, owner: string, repo: string,) {
        super(executor);
        this.owner = owner;
        this.repo = repo;
    }
    //   通过issue id分页获取issue的评论
    qCommentsByIssueId(issueId: string, params: QPageBase) {
        return this.request<Comment[]>({
            url: `/repos/${this.owner}/${this.repo}/issues/${issueId}/comments`,
            method: 'GET',
            params
        });
    }
}