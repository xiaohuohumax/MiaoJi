<template>
    <CLoading :state="cState">
        <template #fail>
            <div class="text-center">
                <NButton @click="queryCommunication" class="mx-auto">
                    重试
                </NButton>
            </div>
        </template>
        <COver v-if="!communication">未指定"留言"页</COver>
        <NSpace v-else vertical>
            <CSubTitle :context="communication.title" />
            <NCard :bordered="false" size="small">
                <NSpace vertical size="small">
                    <CMarkdown :text="communication.body" :id="communication.number" />
                    <CReactions :reactions="communication.reactions" />
                </NSpace>
            </NCard>
            <CComments :issue="communication" name="留言" />
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

// 查询留言
const communication = ref<Issue>(null!);
const cState = watchLoading({
    state: 'init',
    fail: '留言查询失败!'
});

async function queryCommunication() {
    cState.value = 'loading';
    const [err, data] = await awaitTo(issueApi.qIssuePage({
        labels: appConfig.label.communicationLabel,
        per_page: '1',
        state: 'all'
    }));
    if (err) {
        cState.value = 'fail';
        return;
    }
    communication.value = data[0];
    cState.value = 'success';
}

queryCommunication();
</script>