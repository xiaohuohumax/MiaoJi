import { Api, RequestExecutor } from '@miaoji/util';
import { AxiosResponse } from 'axios';
import { Label } from '../entity';
import { QPageBase } from '../query';

export type CreateLabelData = Partial<Omit<Label, 'id'>>

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
        return this.request<AxiosResponse<Label[]>>({
            url: `/repos/${this.owner}/${this.repo}/labels`,
            method: 'GET',
            params
        });
    }
    // 查询全部
    async qAllLabels(): Promise<Label[]> {
        const labels: Label[] = [];
        const per_page = 100;
        for (let page = 1; ; page++) {
            const { data } = await this.qLabelsByPage({
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
    // 创建标签
    createLabel(label: CreateLabelData) {
        return this.request<AxiosResponse<Label>, CreateLabelData>({
            url: `/repos/${this.owner}/${this.repo}/labels`,
            method: 'POST',
            data: label,
        });
    }
    // 删除标签
    deleteLabelByName(name: string) {
        return this.request<AxiosResponse>({
            url: `/repos/${this.owner}/${this.repo}/labels/${name}`,
            method: 'DELETE'
        });
    }
}