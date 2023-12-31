<template>
    <NSpace vertical>
        <NCard size="small" :bordered="false">
            <CBanner />
        </NCard>
        <NCard size="small" :bordered="false">
            <NInput size="large" placeholder="搜索标签" v-model:value="select">
                <template #suffix>
                    <CloseOne size="1.5rem" class="cursor-pointer mx-2" @click="labelChange('')" />
                </template>
            </NInput>
        </NCard>
        <NCard size="small" :bordered="false" v-if="selectLabels.length > 0">
            <NSpace>
                <CLabel v-for="label in selectLabels" :key="label.id" :hidden-des="false" :label="label"
                    @click="labelChange(label.name)" class="font-bold " />
            </NSpace>
        </NCard>
        <NCard v-for="document in documents" :key="document.number" size="small" :bordered="false">
            <NSpace vertical size="small">
                <RouterLink :to="`/doc/${document.number}`" class="text-2xl font-bold duration-100 hover:text-green-300">
                    {{ document.title }}
                </RouterLink>
                <NSpace align="center" size="small">
                    <NTime :time="new Date(document.updated_at)" type="relative" />
                    <CLabel v-for="label in removeFuncLabels(document.labels)" :key="label.id" :hidden-des="true"
                        :label="label" class="font-bold" @click="labelChange(label.name)" />
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
import { onActivated, ref, watch } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from 'vue-router';
import { CloseOne } from '@icon-park/vue-next';
import { Issue, Label } from '@miaoji/api';
import awaitTo from 'await-to-js';
import { NButton, NCard, NInput, NSpace, NTime } from 'naive-ui';
import { issueApi } from '@/api';
import { removeFuncLabels, useAppStore } from '@/store/app.store';
import { watchLoading } from '@/util/loading';
import CLabel from '&/CLabel.vue';
import CLoading from '&/CLoading.vue';
import CMarkdown from '&/CMarkdown.vue';
import COver from '&/COver.vue';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';
import CBanner from './items/CBanner.vue';


const props = withDefaults(defineProps<{
    label?: string
}>(), {
    label: ''
});

const router = useRouter();
const issuesStore = useAppStore();

// 文章查询
const documents = ref<Issue[]>([]);
const dState = watchLoading({
    state: 'loading',
    fail: '文章查询失败!'
});
const isOver = ref(false);

let page = 1;
const perPage = 20;

async function queryDocuments(page: number, labels: string[]) {
    dState.value = 'loading';

    const labelString = [...labels, appConfig.label.docLabel]
        .filter(l => l.trim() != '').join(',');

    const [err, data] = await awaitTo(issueApi.qIssuePage({
        state: 'all',
        page: page.toString(),
        labels: labelString,
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
        queryDocuments(page + op, selectLabels.value.map(l => l.name))
            .then(() => {
                page += op;
            });
    }
    st = setTimeout(next, 500);
}


// 搜索
const select = ref(props.label);
const selectLabels = ref<Label[]>([]);

function selectChange() {
    page = 1;
    documents.value = [];
    isOver.value = false;
    selectLabels.value = issuesStore.selectNotFuncLabels(select.value);
    nextPage(0);
}

selectChange();
// 监听
watch(() => select.value, selectChange);

// 标签变化
function labelChange(label: string) {
    router.replace({ query: { label } });
}
// 路由监听
onBeforeRouteUpdate(({ query }) => {
    // 同页跳转回顶部
    window.scrollTo(0, 0);
    if (typeof (query?.label) === 'string') {
        select.value = query.label;
    }
});


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
    oldSTop = sTop;
}

onActivated(() => {
    // 其他标签页特殊地址
    if (props.label && props.label != select.value) {
        window.scrollTo(0, 0);
        select.value = props.label;
    } else {
        window.scrollTo(0, oldSTop);
    }
    window.addEventListener('scroll', handleScroll);
});

onBeforeRouteLeave(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>