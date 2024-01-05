import { ref, watch } from 'vue';
import { useMessage } from 'naive-ui';

const defaultDuration = 2_000;

export type LoadingState = 'init' | 'loading' | 'success' | 'fail'

interface WatchLoadingConfig {
    state: LoadingState,
    duration?: number,

    init?: (() => string) | string,
    loading?: (() => string) | string,
    success?: (() => string) | string,
    fail?: (() => string) | string,
}

export function watchLoading(config: WatchLoadingConfig) {
    const message = useMessage();
    const loading = ref<LoadingState>(config.state);
    const stateMap = {
        'loading': message.info,
        'success': message.success,
        'fail': message.error,
        'init': () => { }
    };
    watch(() => loading.value, () => {
        const data = config[loading.value];

        data && stateMap[loading.value](typeof (data) == 'function' ? data() : data, {
            duration: config.duration || defaultDuration
        });
    });
    return loading;
}