<template>
    <CLoading :state="aState">
        <template #fail>
            <div class="text-center">
                <NButton @click="queryIssue" class="mx-auto">
                    重试
                </NButton>
            </div>
        </template>
        <COver v-if="!about">未指定"关于"页</COver>
        <NSpace v-else vertical>
            <CSubTitle :context="about.title"/>
            <NCard size="small" :bordered="false">
                <NSpace vertical>
                    <CMarkdown :text="about.body" :id="about.number" />
                    <CReactions :reactions="about.reactions" />
                </NSpace>
            </NCard>
            <CComments :issue="about" name="评论" />
        </NSpace>
    </CLoading>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Issue } from '@miaoji/api';
import awaitTo from 'await-to-js';
import { NButton, NCard, NSpace } from 'naive-ui';
import { issueApi } from '@/api';
import CSubTitle from '@/components/CSubTitle.vue';
import { watchLoading } from '@/util/loading';
import CLoading from '&/CLoading.vue';
import CMarkdown from '&/CMarkdown.vue';
import COver from '&/COver.vue';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';
import CComments from './items/CComments.vue';

const about = ref<Issue>(null!);
const aState = watchLoading({
    state: 'loading',
    fail: '查询失败!'
});

async function queryIssue() {
    aState.value = 'loading';
    const [err, data] = await awaitTo(issueApi.qIssuePage({
        labels: appConfig.label.aboutLabel,
        per_page: '1',
        state: 'all'
    }));
    if (err) {
        aState.value = 'fail';
        return;
    }
    about.value = data[0];
    aState.value = 'success';
}

queryIssue();
</script>