<template>
    <CLoading :state="dState">
        <template #fail>
            <NCard size="small" :bordered="false">
                <button class="p-2 w-full font-bold" @click="queryDocument">
                    重新加载
                </button>
            </NCard>
        </template>
        <NSpace vertical>
            <NCard size="small" :bordered="false">
                <NSpace class="text-sm relative" vertical>
                    <p class="text-2xl font-bold align-middle">
                        {{ document.title }}
                    </p>
                    <NSpace>
                        <a target="_blank" :href="document.user.html_url">
                            <span>{{ document.user.login }}</span>
                        </a>
                        <span>
                            创建于:
                            <NTime :time="new Date(document.created_at)" />
                        </span>
                        <span>
                            更新于:
                            <NTime :time="new Date(document.updated_at)" type="relative" />
                        </span>
                    </NSpace>
                    <NSpace align="center">
                        <CLabel v-for="label in removeFuncLabels(document.labels)" :key="label.id" :hidden-des="true"
                            @click="gotoHome(label)" :label="label" class="font-bold" />
                        <CReactions :reactions="document.reactions" />
                    </NSpace>
                    <CMarkdown :text="document.body" :id="document.number" />
                </NSpace>
            </NCard>
            <CComments :issue="document" name="评论" />
        </NSpace>
    </CLoading>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Issue, Label } from '@miaoji/api';
import { CLoading } from '@miaoji/components';
import { watchLoading } from '@miaoji/components';
import { updateTitle } from '@miaoji/util';
import awaitTo from 'await-to-js';
import { NCard, NSpace, NTime } from 'naive-ui';
import { issueApi } from '@/api';
import { removeFuncLabels } from '@/store/app.store';
import CLabel from '&/CLabel.vue';
import CMarkdown from '&/CMarkdown.vue';
import CReactions from '&/CReactions.vue';
import CComments from './items/CComments.vue';

const props = defineProps<{
    id: string
}>();

// 查询文章
const document = ref<Issue>(null!);
const dState = watchLoading({
    state: 'loading',
    fail: '文章查询失败!'
});

async function queryDocument() {
    dState.value = 'loading';
    const [err, data] = await awaitTo(issueApi.qIssueById(props.id!));
    if (err || data == null) {
        dState.value = 'fail';
        return;
    }
    document.value = data;
    dState.value = 'success';
    updateTitle({ after: document.value.title });
}

queryDocument();

const router = useRouter();
function gotoHome(label: Label) {
    router.push({ path: '/', query: { label: label.name } });
}
</script>