<template>
    <NSpace vertical>
        <NCard class="font-bold" size="small" :bordered="false">
            <p>{{ title }}:</p>
        </NCard>
        <NCard class="font-bold p-2 text-center" v-if="closeComment" size="small" :bordered="false">
            {{ t('component.cComments.hiddenContext', { title }) }}
        </NCard>
        <template v-else>
            <NCard size="small" :bordered="false">
                <a :href="issue.html_url" target="_blank">
                    <NButton class="w-full" type="info">{{ t('component.cComments.gotoComment', {
                        title: title.toLocaleLowerCase()
                    }) }}</NButton>
                </a>
            </NCard>
            <NSpace vertical v-if="comments.length > 0">
                <NCard size="small" v-for="comment in comments" :key="comment.id" :bordered="false">
                    <div class="flex">
                        <a target="_blank" :href="comment.user.html_url">
                            <img :src="comment.user.avatar_url"
                                class="rounded-md block w-16 h-16 flex-shrink-0 hover:scale-105 duration-100">
                        </a>
                        <NSpace vertical class="ml-2 flex-grow w-0">
                            <a target="_blank" :href="comment.user.html_url">
                                <span class="font-bold text-xl hover:text-orange-500 dark:hover:text-green-300">{{ comment.user.login }}</span>
                            </a>
                            <NSpace align="center">
                                <NTime :time="new Date(comment.updated_at)" type="relative" />
                                <CReactions class="inline-block" :reactions="comment.reactions" />
                            </NSpace>
                            <NCard :bordered="false" size="small" class="w-full overflow-hidden">
                                <CMarkdown :text="comment.body" class="rounded-lg" :id="comment.id"
                                    :theme="appStore.theme.markdown" />
                            </NCard>
                        </NSpace>
                    </div>
                </NCard>
            </NSpace>
            <CLoading :state="cState">
                <template #fail>
                    <div class="text-center">
                        <NButton @click="nextPage" class="mx-auto">
                            {{ t('comment.button.retry') }}
                        </NButton>
                    </div>
                </template>
                <COver v-if="isOver" :context="t('component.cOver.context')" />
                <div v-else class="text-center">
                    <NButton @click="nextPage" class="mx-auto">
                        {{ t('comment.button.more') }}
                    </NButton>
                </div>
            </CLoading>
        </template>
    </NSpace>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { Comment, Issue } from '@miaoji/api';
import { CLoading, CMarkdown, COver, watchLoading } from '@miaoji/components';
import awaitTo from 'await-to-js';
import { NButton, NCard, NSpace, NTime } from 'naive-ui';
import { commentApi } from '@/api';
import { hasLabel, useAppStore } from '@/store/app.store';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';
import { uI18n } from '#/locales';

const { t } = uI18n();
const appStore = useAppStore();

const props = defineProps<{
    issue: Issue,
    title: string
}>();

// 依据留言issue查询相关评论
const comments = ref<Comment[]>([]);
const cState = watchLoading({
    state: 'init',
    fail: () => t('component.cLoading.fail', { name: props.title })
});
const isOver = ref(false);
let cPage = 1;
const cPerPage = 10;

// 判断评论区是否关闭
const closeComment = computed(() => {
    return hasLabel(props.issue.labels, appConfig.label.hiddenCommentLabel);
});

async function queryComments(issueId: string, page: number) {
    if (closeComment.value) {
        return;
    }
    cState.value = 'loading';
    const [err, res] = await awaitTo(commentApi.qCommentsByIssueId(issueId, {
        page: page.toString(),
        per_page: cPerPage.toString()
    }));
    if (err) {
        cState.value = 'fail';
        return;
    }
    if (res.data.length == 0 || res.data.length < cPerPage) {
        isOver.value = true;
    }
    comments.value.push(...res.data);
    cState.value = 'success';
}

queryComments(props.issue.number.toString(), cPage);

function nextPage() {
    const oldSize = comments.value.length;
    const nPage = oldSize == 0 ? 1 : cPage + 1;
    queryComments(props.issue.number.toString(), nPage)
        .then(() => {
            if (oldSize != comments.value.length) {
                cPage += nPage;
            }
        });
}
</script>