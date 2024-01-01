import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptors {
    reqtInterceptors?: <T extends AxiosRequestConfig>(config: T) => T | Promise<T>
    reqInterceptorCatch?: (err: any) => any
    resInterceptors?: (response: AxiosResponse) => AxiosResponse
    resInterceptorCatch?: (err: any) => any
}

export interface RequestConfig extends AxiosRequestConfig {
    interceptors?: RequestInterceptors
}

export class RequestExecutor {
    instance: AxiosInstance;
    interceptors?: RequestInterceptors;
    constructor(config: RequestConfig) {
        this.instance = axios.create(config);
        this.interceptors = config.interceptors;

        this.instance.interceptors.request.use(
            this.interceptors?.reqtInterceptors,
            this.interceptors?.reqInterceptorCatch
        );
        this.instance.interceptors.response.use(
            this.interceptors?.resInterceptors,
            this.interceptors?.resInterceptorCatch
        );
        // 默认返回 data 和 response
        this.instance.interceptors.response.use(
            res => res.data,
            err=> Promise.reject(err.response)
        );
    }
    static create(config: RequestConfig) {
        return new RequestExecutor(config);
    }
}

export class Api {
    protected executor: RequestExecutor;
    constructor(executor: RequestExecutor) {
        this.executor = executor;
    }
    request<R = any, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
        return this.executor.instance.request<null, R, D>(config);
    }
}