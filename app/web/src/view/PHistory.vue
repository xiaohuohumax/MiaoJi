<template>
    <NSpace vertical>
        <CSubTitle :context="t('page.history.subtitle')" />
        <NCard size="small" :bordered="false" v-if="historys.length > 0">
            <NTimeline>
                <NTimelineItem v-for="history in historys" :key="history.number" :color="gHistoryColor(history)">
                    <template #header>
                        <div class="text-xl">{{ history.title }}</div>
                    </template>
                    <template #footer>
                        <NSpace vertical size="small">
                            <CReactions :reactions="history.reactions" />
                            <NSpace>
                                <span>
                                    {{ t('comment.span.createAt') }}:
                                    <NTime :time="new Date(history.created_at)" />
                                </span>
                                <span>
                                    {{ t('comment.span.updateAt') }}:
                                    <NTime :time="new Date(history.updated_at)" type="relative" />
                                </span>
                            </NSpace>
                            <CMarkdown :text="history.body" :id="history.number" :theme="appStore.theme.markdown" />
                        </NSpace>
                    </template>
                </NTimelineItem>
            </NTimeline>
        </NCard>
        <CLoading :state="hState">
            <template #fail>
                <div class="text-center">
                    <NButton @click="nextPage">
                        {{ t('comment.button.retry') }}
                    </NButton>
                </div>
            </template>
            <COver v-if="isOver" :context="t('component.cOver.context')" />
            <div v-else class="text-center">
                <NButton @click="nextPage">
                    {{ t('comment.button.more') }}
                </NButton>
            </div>
        </CLoading>
    </NSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Issue } from '@miaoji/api';
import { CLoading, CMarkdown, COver, CSubTitle, watchLoading } from '@miaoji/components';
import awaitTo from 'await-to-js';
import { NButton, NCard, NSpace, NTime, NTimeline, NTimelineItem } from 'naive-ui';
import { issueApi } from '@/api';
import { useAppStore } from '@/store/app.store';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';
import { uI18n } from '#/locales';

const { t } = uI18n();
const appStore = useAppStore();

const perPage = 10;
let page = 1;

// 查询历史
const historys = ref<Issue[]>([]);
const hState = watchLoading({
    state: 'loading',
    fail: () => t('component.cLoading.fail', { name: t('page.history.subtitle') })
});
const isOver = ref(false);

async function queryIssues(page: number) {
    hState.value = 'loading';
    const [err, res] = await awaitTo(issueApi.qIssuePage({
        labels: appConfig.label.historyLabel,
        state: 'all',
        page: page.toString(),
        per_page: perPage.toString()
    }));
    if (err) {
        hState.value = 'fail';
        return;
    }
    if (res.data.length == 0 || res.data.length < perPage) {
        isOver.value = true;
    }
    historys.value.push(...res.data);
    hState.value = 'success';
}

queryIssues(page);

function nextPage() {
    const oldSize = historys.value.length;
    const nPage = page + 1;
    queryIssues(nPage).then(() => {
        if (oldSize != historys.value.length) {
            page += nPage;
        }
    });
}

function gHistoryColor({ labels }: Issue) {
    const colorLabel = labels.find(({ name }) => name.startsWith(appConfig.label.historyLabel)
        && name.length > appConfig.label.historyLabel.length);

    return colorLabel != null
        ? '#' + colorLabel.color
        : 'default';
}
</script>