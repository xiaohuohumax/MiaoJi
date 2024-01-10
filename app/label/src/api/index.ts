import { LabelApi } from '@miaoji/api';
import { RequestExecutor } from '@miaoji/util';
import appConfig from '../../app.config';

const executor = RequestExecutor.create({
    baseURL: appConfig.api.apiBaseUrl,
    timeout: 10_0000,
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + appConfig.api.accessToken
    },
    interceptors: {
        reqtInterceptors(config) {
            return config;
        },
        reqInterceptorCatch(err) {
            return Promise.reject(err);
        },
        resInterceptors(response) {
            return response;
        },
        resInterceptorCatch(err) {
            return Promise.reject(err);
        },
    }
});

export const labelApi = new LabelApi(executor, appConfig.api.owner, appConfig.api.repo);
