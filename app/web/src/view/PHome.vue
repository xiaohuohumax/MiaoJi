<template>
    <NSpace vertical>
        <NCard size="small" :bordered="false">
            <CBanner />
        </NCard>
        <NCard v-for="document in documents" :key="document.number" size="small" :bordered="false">
            <NSpace vertical size="small">
                <RouterLink :to="`/doc/${document.number}`" class="text-2xl">
                    {{ document.title }}
                </RouterLink>
                <NSpace align="center" size="small">
                    <NTime :time="new Date(document.updated_at)" type="relative" />
                    <CLabel v-for="label in removeFuncLabels(document.labels)" :key="label.id" :hidden-des="true"
                        :label="label" @click="labelClick(label)" />
                    <CReactions :reactions="document.reactions" />
                </NSpace>
                <!-- <CReactions :reactions="issue.reactions" /> -->
            </NSpace>
            <CMarkdown :text="document.body" :id="document.number" />
        </NCard>
        <CLoading :state="dState">
            <template #fail>
                <div class="text-center">
                    <NButton @click="nextPage(0)" class="mx-auto">
                        重试
                    </NButton>
                </div>
            </template>
            <COver v-if="isOver" />
            <div v-else class="text-center">
                <NButton @click="nextPage(1)" class="mx-auto">
                    更多
                </NButton>
            </div>
        </CLoading>
    </NSpace>
</template>
<script setup lang="ts">
import { onActivated, ref } from 'vue';
import { onBeforeRouteLeave, useRouter } from 'vue-router';
import { Issue, Label } from '@miaoji/api';
import { CLoading } from '@miaoji/components';
import { COver } from '@miaoji/components';
import { watchLoading } from '@miaoji/components';
import awaitTo from 'await-to-js';
import { NButton, NCard, NSpace, NTime } from 'naive-ui';
import { issueApi } from '@/api';
import { removeFuncLabels } from '@/store/app.store';
import CLabel from '&/CLabel.vue';
import CMarkdown from '&/CMarkdown.vue';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';
import CBanner from './items/CBanner.vue';

const props = withDefaults(defineProps<{
    label?: string
}>(), {
    label: ''
});

// 文章查询
const documents = ref<Issue[]>([]);
const label = ref<string>(props.label);
const dState = watchLoading({
    state: 'loading',
    fail: '文章查询失败!'
});
const isOver = ref(false);

let page = 1;
const perPage = 20;

async function queryDocuments(page: number, label: string) {
    dState.value = 'loading';

    const [err, data] = await awaitTo(issueApi.qIssuePage({
        state: 'all',
        page: page.toString(),
        labels: appConfig.label.docLabel + ',' + label,
        per_page: perPage.toString()
    }));
    if (err) {
        dState.value = 'fail';
        return;
    }
    if (data.length == 0 || data.length < perPage) {
        isOver.value = true;
    }
    documents.value.push(...data);
    dState.value = 'success';
}

let st: number;
// 下一页
function nextPage(op: number) {
    if (st) {
        clearTimeout(st);
    }
    function next() {
        queryDocuments(page + op, label.value)
            .then(() => {
                page += op;
            });
    }
    st = setTimeout(next, 500);
}

// 首次搜索
nextPage(0);

const router = useRouter();
function labelClick(label: Label) {
    router.push({ path: '/', query: { label: label.name } });
}

// 滚动条记录
let oldSTop = 0;
const beginBttom = 100;

function handleScroll() {
    const sTop = document.documentElement.scrollTop;
    const cHeight = document.documentElement.clientHeight;
    const sHeight = document.documentElement.scrollHeight;

    const viewH = sTop + cHeight + beginBttom;

    if (oldSTop < sTop && viewH >= sHeight && !isOver.value) {
        nextPage(1);
    }
}

onBeforeRouteLeave(() => {
    oldSTop = document.documentElement.scrollTop;
});

onActivated(() => {
    window.scrollTo(0, oldSTop);
    window.addEventListener('scroll', handleScroll);
});

onBeforeRouteLeave(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>