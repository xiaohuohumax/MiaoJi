<template>
    <CLoading :state="dState">
        <template #fail>
            <NCard size="small" :bordered="false">
                <button class="p-2 w-full font-bold" @click="queryDocument">
                    {{ t('comment.button.refresh') }}
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
                        <a target="_blank" :href="document.user.html_url" class="hover:text-green-300">
                            <span>{{ document.user.login }}</span>
                        </a>
                        <span>
                            {{ t('comment.span.createAt') }}:
                            <NTime :time="new Date(document.created_at)" />
                        </span>
                        <span>
                            {{ t('comment.span.updateAt') }}:
                            <NTime :time="new Date(document.updated_at)" type="relative" />
                        </span>
                    </NSpace>
                    <NSpace align="center">
                        <CLabel v-for="label in removeFuncLabels(document.labels)" :key="label.id" :hidden-des="true"
                            @click="gotoHome(label)" :label="label" class="font-bold" />
                        <CReactions :reactions="document.reactions" />
                    </NSpace>
                    <CMarkdown :text="document.body" :id="document.number" :theme="appStore.theme.markdown" />
                </NSpace>
            </NCard>
            <CComments :issue="document" :title="t('page.doc.commentsTitle')" />
        </NSpace>
    </CLoading>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { onActivated } from 'vue';
import { useRouter } from 'vue-router';
import { Issue, Label } from '@miaoji/api';
import { CLoading, CMarkdown, watchLoading } from '@miaoji/components';
import { updateTitle } from '@miaoji/util';
import awaitTo from 'await-to-js';
import { AxiosError, AxiosResponse } from 'axios';
import { NCard, NSpace, NTime } from 'naive-ui';
import { issueApi } from '@/api';
import { hasLabel, removeFuncLabels, useAppStore } from '@/store/app.store';
import CLabel from '&/CLabel.vue';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';
import { uI18n } from '#/locales';
import CComments from './items/CComments.vue';

const { t } = uI18n();
const appStore = useAppStore();
const router = useRouter();

const props = defineProps<{
    id: string
}>();

// 查询文章
const document = ref<Issue>(null!);
const dState = watchLoading({
    state: 'loading',
    fail: () => t('component.cLoading.fail', { name: t('page.doc.subtitle') })
});

async function queryDocument() {
    dState.value = 'loading';
    const [err, res] = await awaitTo<AxiosResponse<Issue>, AxiosError>(issueApi.qIssueById(props.id!));
    if (err) {
        if (err?.response?.status == 404) {
            router.replace({ name: 'PNotFound' });
            return;
        }
        dState.value = 'fail';
        return;
    }
    if (!hasLabel(res.data.labels, appConfig.label.docLabel)) {
        router.replace({ name: 'PNotFound' });
        return;
    }
    document.value = res.data;
    dState.value = 'success';
    updateTitle({ after: document.value.title });
}

queryDocument();

onActivated(() => {
    document.value && updateTitle({ after: document.value.title });
});

function gotoHome(label: Label) {
    router.push({ path: '/', query: { label: label.name } });
}
</script>