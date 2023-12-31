import { Api, RequestExecutor } from '@miaoji/util';
import { Label } from '../entry';

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

export class LabelApi extends Api {
    owner: string;
    repo: string;
    constructor(executor: RequestExecutor, owner: string, repo: string,) {
        super(executor);
        this.owner = owner;
        this.repo = repo;
    }
    // 分页查询
    qLabelsByPage(params: QPageBase) {
        return this.request<Label[]>({
            url: `repos/${this.owner}/${this.repo}/labels`,
            method: 'GET',
            params
        });
    }
    // 查询全部
    async qAllLabels() {
        const labels: Label[] = [];
        const per_page = 100;
        for (let page = 1; ; page++) {
            const data = await this.qLabelsByPage({
                page: page.toString(),
                per_page: per_page.toString()
            });
            labels.push(...data);
            if (data.length != per_page) {
                break;
            }
        }
        return labels;
    }
}