import { CommentApi, IssueApi, LabelApi } from '@miaoji/api';
import { logger, RequestExecutor } from '@miaoji/util';
import { AxiosError } from 'axios';
import appConfig from '#/app.config';
import { i18nt } from '#/locales';

const st: { [key in string]?: number } = {};
function throttleErrMsg(msg: string, timeout: number = 2_000) {
    if (!st[msg]) {
        st[msg] = setTimeout(() => {
            st[msg] = undefined;
            window.$message?.error(msg);
        }, timeout);
    }
}

function handleError(err: any) {
    const { response, code } = err;
    if (code == AxiosError.ERR_NETWORK) {
        throttleErrMsg(i18nt('api.error.network'));
        return;
    }
    if (!response) {
        return;
    }
    switch (response.status) {
    case 401:
        throttleErrMsg(i18nt('api.error.unauthorized'));
        break;
    case 403:
        if (response.data.message.startsWith('API rate limit')) {
            throttleErrMsg(i18nt('api.error.rateLimit'));
            return;
        }
        throttleErrMsg(i18nt('api.error.forbidden'));
        break;
    case 404:
        throttleErrMsg(i18nt('api.error.notFound'));
        break;
    case 422:
        throttleErrMsg(i18nt('api.error.unprocessableEntity'));
        break;
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
        reqInterceptorCatch(err) {
            return Promise.reject(err);
        },
        resInterceptors(response) {
            logger.debug(`[${response.config.url}]` + JSON.stringify(response.config.params));
            logger.debug(response);
            return response;
        },
        resInterceptorCatch(err) {
            handleError(err);
            return Promise.reject(err);
        },
    }
});

export const issueApi = new IssueApi(executor, appConfig.api.owner, appConfig.api.repo);
export const commentApi = new CommentApi(executor, appConfig.api.owner, appConfig.api.repo);
export const labelApi = new LabelApi(executor, appConfig.api.owner, appConfig.api.repo);
