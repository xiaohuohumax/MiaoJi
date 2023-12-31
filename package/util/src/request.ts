import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptors {
    reqtInterceptors?: <T extends AxiosRequestConfig>(config: T) => T | Promise<T>
    resInterceptors?: (response: AxiosResponse) => AxiosResponse
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
            err => Promise.reject(err),
        );
        this.instance.interceptors.response.use(
            this.interceptors?.resInterceptors,
            err => Promise.reject(err),
        );
        this.instance.interceptors.response.use(res => res.data);
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
    request<R = AxiosResponse, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
        return this.executor.instance.request<null, R, D>(config);
    }
}