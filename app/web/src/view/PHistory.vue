<template>
    <NSpace vertical>
        <CSubTitle context="历史"/>
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
                                    创建于:
                                    <NTime :time="new Date(history.created_at)" />
                                </span>
                                <span>
                                    更新于:
                                    <NTime :time="new Date(history.updated_at)" type="relative" />
                                </span>
                            </NSpace>
                            <CMarkdown :text="history.body" :id="history.number" />
                        </NSpace>
                    </template>
                </NTimelineItem>
            </NTimeline>
        </NCard>
        <CLoading :state="hState" class="my-2">
            <template #fail>
                <div class="text-center">
                    <NButton @click="nextPage">
                        重试
                    </NButton>
                </div>
            </template>
            <COver v-if="isOver" />
            <div v-else class="text-center">
                <NButton @click="nextPage">
                    更多
                </NButton>
            </div>
        </CLoading>
    </NSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Issue } from '@miaoji/api';
import awaitTo from 'await-to-js';
import{ NButton, NCard, NSpace, NTime, NTimeline, NTimelineItem } from 'naive-ui';
import { issueApi } from '@/api';
import CSubTitle from '@/components/CSubTitle.vue';
import { watchLoading } from '@/util/loading';
import CLoading from '&/CLoading.vue';
import CMarkdown from '&/CMarkdown.vue';
import COver from '&/COver.vue';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';


const perPage = 10;
let page = 1;

// 查询历史
const historys = ref<Issue[]>([]);
const hState = watchLoading({
    state: 'loading',
    fail: '历史查询失败!'
});
const isOver = ref(false);

async function queryIssues(page: number) {
    hState.value = 'loading';
    const [err, data] = await awaitTo(issueApi.qIssuePage({
        labels: appConfig.label.historyLabel,
        state: 'all',
        page: page.toString(),
        per_page: perPage.toString()
    }));
    if (err) {
        hState.value = 'fail';
        return;
    }
    if (data.length == 0 || data.length < perPage) {
        isOver.value = true;
    }
    historys.value.push(...data);
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