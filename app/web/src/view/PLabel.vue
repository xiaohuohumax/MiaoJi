<template>
    <NSpace vertical>
        <CSubTitle :context="t('page.label.subtitle')" />
        <NCard size='small' :bordered="false" v-show="issuesStore.notFuncLabels.length > 0">
            <NSpace>
                <CLabel class="truncate" :label="label" :hidden-des="false" v-for="label in issuesStore.notFuncLabels"
                    :key="label.name" @click="gotoHome(label)" />
            </NSpace>
        </NCard>
        <CLoading :state="lState">
            <template #fail>
                <div class="text-center">
                    <NButton @click="refresh" class="mx-auto">
                        {{ t('comment.button.retry') }}
                    </NButton>
                </div>
            </template>
            <!-- 暂隐藏刷新 -->
            <div class="text-center hidden">
                <NButton @click="refresh" class="mx-auto">
                    {{ t('comment.button.refresh') }}
                </NButton>
            </div>
        </CLoading>
    </NSpace>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Label } from '@miaoji/api';
import { CLoading, CSubTitle, watchLoading } from '@miaoji/components';
import awaitTo from 'await-to-js';
import { NButton, NCard, NSpace } from 'naive-ui';
import { useAppStore } from '@/store/app.store';
import CLabel from '&/CLabel.vue';
import { uI18n } from '#/locales';

const { t } = uI18n();

const issuesStore = useAppStore();
const router = useRouter();

const lState = watchLoading({
    state: 'success',
    fail: () => t('component.cLoading.fail', { name: t('page.label.subtitle') }),
    success: () => t('component.cLoading.success', { name: t('page.label.subtitle') }),
});

async function refresh() {
    lState.value = 'loading';
    const [err] = await awaitTo(issuesStore.loadLabels(1));
    lState.value = err ? 'fail' : 'success';
}

function gotoHome(label: Label) {
    router.push({ path: '/', query: { label: label.name } });
}
</script>