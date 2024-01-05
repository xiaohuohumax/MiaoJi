import { Api, RequestExecutor } from '@miaoji/util';
import { AxiosResponse } from 'axios';
import { Comment } from '../entity';
import { QPageBase } from '../query';

export class CommentApi extends Api {
    private owner: string;
    private repo: string;
    constructor(executor: RequestExecutor, owner: string, repo: string,) {
        super(executor);
        this.owner = owner;
        this.repo = repo;
    }
    // 通过issue id分页获取issue的评论
    qCommentsByIssueId(issueId: string, params: QPageBase) {
        return this.request<AxiosResponse<Comment[]>>({
            url: `/repos/${this.owner}/${this.repo}/issues/${issueId}/comments`,
            method: 'GET',
            params
        });
    }
}