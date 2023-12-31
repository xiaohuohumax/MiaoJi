import { CommentApi, IssueApi, LabelApi } from '@miaoji/api';
import { logger, RequestExecutor } from '@miaoji/util';
import { useMessage } from 'naive-ui';
import appConfig from '#/app.config';

const executor = RequestExecutor.create({
    baseURL: 'https://api.github.com',
    timeout: 10_0000,
    headers: {
        Accept: 'application/json',
        Authorization: appConfig.api.accessToken || ('Bearer ' + appConfig.api.accessToken)
    },
    interceptors: {
        reqtInterceptors(config) {
            return config;
        },
        resInterceptors(response) {
            logger.debug(`[${response.config.url}]` + JSON.stringify(response.config.params));
            logger.debug(response);
            const message = useMessage();
            if(response.status == 401){ 
                message.error('没有权限');
            }
            return response;
        },
    }
});

export const issueApi = new IssueApi(executor, appConfig.api.owner, appConfig.api.repo);
export const commentApi = new CommentApi(executor, appConfig.api.owner, appConfig.api.repo);
export const labelApi = new LabelApi(executor, appConfig.api.owner, appConfig.api.repo);
