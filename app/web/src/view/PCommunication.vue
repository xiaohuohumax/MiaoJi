<template>
    <CLoading :state="cState">
        <template #fail>
            <div class="text-center">
                <NButton @click="queryCommunication" class="mx-auto">
                    {{ t('comment.button.retry') }}
                </NButton>
            </div>
        </template>
        <COver v-if="!communication" :context="t('page.communication.noPageTip')" />
        <NSpace v-else vertical>
            <CSubTitle :context="t('page.communication.subtitle')" />
            <NCard :bordered="false" size="small">
                <NSpace vertical size="small">
                    <CMarkdown :text="communication.body" :id="communication.number" :theme="appStore.theme.markdown" />
                    <CReactions :reactions="communication.reactions" />
                </NSpace>
            </NCard>
            <CComments :issue="communication" :title="t('page.communication.subtitle')" />
        </NSpace>
    </CLoading>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Issue } from '@miaoji/api';
import { CLoading, CMarkdown, COver, CSubTitle, watchLoading } from '@miaoji/components';
import awaitTo from 'await-to-js';
import { NButton, NCard, NSpace } from 'naive-ui';
import { issueApi } from '@/api';
import { useAppStore } from '@/store/app.store';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';
import { uI18n } from '#/locales';
import CComments from './items/CComments.vue';

const { t } = uI18n();
const appStore = useAppStore();

// 查询留言
const communication = ref<Issue>(null!);
const cState = watchLoading({
    state: 'init',
    fail: () => t('component.cLoading.fail', { name: t('page.communication.subtitle') })
});

async function queryCommunication() {
    cState.value = 'loading';
    const [err, res] = await awaitTo(issueApi.qIssuePage({
        labels: appConfig.label.communicationLabel,
        per_page: '1',
        state: 'all'
    }));
    if (err) {
        cState.value = 'fail';
        return;
    }
    communication.value = res.data[0];
    cState.value = 'success';
}

queryCommunication();
</script>