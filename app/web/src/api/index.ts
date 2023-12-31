import { CommentApi, IssueApi, LabelApi } from '@miaoji/api';
import { logger, RequestExecutor } from '@miaoji/util';
import { AxiosResponse } from 'axios';
import appConfig from '#/app.config';

function handleError(response?: AxiosResponse) {
    if (!response) {
        return;
    }
    switch (response.status) {
    case 401:
        window.$message?.error('未授权!');
        break;
    case 403:
        window.$message?.error('没有权限,可能访问超出限制!');
    }
}

const executor = RequestExecutor.create({
    baseURL: 'https://api.github.com',
    timeout: 10_0000,
    headers: {
        Accept: 'application/json',
        Authorization: appConfig.api.accessToken && ('Bearer ' + appConfig.api.accessToken)
    },
    interceptors: {
        reqtInterceptors(config) {
            return config;
        },
        resInterceptors(response) {
            logger.debug(`[${response.config.url}]` + JSON.stringify(response.config.params));
            logger.debug(response);
            return response;
        },
        resInterceptorCatch(err) {
            handleError(err.response);
            return Promise.reject(err);
        },
    }
});

export const issueApi = new IssueApi(executor, appConfig.api.owner, appConfig.api.repo);
export const commentApi = new CommentApi(executor, appConfig.api.owner, appConfig.api.repo);
export const labelApi = new LabelApi(executor, appConfig.api.owner, appConfig.api.repo);
