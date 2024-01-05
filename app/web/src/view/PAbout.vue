<template>
    <CLoading :state="aState">
        <template #fail>
            <div class="text-center">
                <NButton @click="queryIssue" class="mx-auto">
                    {{ t('comment.button.retry') }}
                </NButton>
            </div>
        </template>
        <COver v-if="!about" :context="t('page.about.noPageTip')" />
        <NSpace v-else vertical>
            <CSubTitle :context="t('page.about.subtitle')" />
            <NCard size="small" :bordered="false">
                <NSpace vertical>
                    <CMarkdown :text="about.body" :id="about.number" :theme="appStore.theme.markdown" />
                    <NSpace>
                        <span>
                            {{ t('comment.span.createAt') }}:
                            <NTime :time="new Date(about.created_at)" />
                        </span>
                        <span>
                            {{ t('comment.span.updateAt') }}:
                            <NTime :time="new Date(about.updated_at)" type="relative" />
                        </span>
                        <CReactions :reactions="about.reactions" />
                    </NSpace>
                </NSpace>
            </NCard>
            <CComments :issue="about" :title="t('page.about.commentsTitle')" />
        </NSpace>
    </CLoading>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Issue } from '@miaoji/api';
import { CLoading, CMarkdown, COver, CSubTitle, watchLoading } from '@miaoji/components';
import awaitTo from 'await-to-js';
import { NButton, NCard, NSpace, NTime } from 'naive-ui';
import { issueApi } from '@/api';
import { useAppStore } from '@/store/app.store';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';
import { uI18n } from '#/locales';
import CComments from './items/CComments.vue';

const { t } = uI18n();
const appStore = useAppStore();
const about = ref<Issue>(null!);
const aState = watchLoading({
    state: 'loading',
    fail: () => t('component.cLoading.fail', { name: '' })
});

async function queryIssue() {
    aState.value = 'loading';
    const [err, res] = await awaitTo(issueApi.qIssuePage({
        labels: appConfig.label.aboutLabel,
        per_page: '1',
        state: 'all'
    }));
    if (err) {
        aState.value = 'fail';
        return;
    }
    about.value = res.data[0];
    aState.value = 'success';
}

queryIssue();
</script>