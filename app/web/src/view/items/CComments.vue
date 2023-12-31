<template>
    <NSpace vertical>
        <NCard class="font-bold" size="small" :bordered="false">
            <p>{{ name }}:</p>
        </NCard>
        <NCard size="small" :bordered="false">
            <a :href="issue.html_url" target="_blank">
                <NButton class="w-full" type="info">去{{ name }}</NButton>
            </a>
        </NCard>
        <NCard class="font-bold p-2 text-center" v-if="closeComment" size="small" :bordered="false">
            {{ name }}已影藏
        </NCard>
        <template v-else>
            <NSpace vertical v-if="comments.length > 0">
                <NCard size="small" v-for="comment in comments" :key="comment.id" :bordered="false">
                    <div class="flex">
                        <a target="_blank" :href="comment.user.html_url">
                            <img :src="comment.user.avatar_url" class="rounded-md block w-16 h-16 flex-shrink-0 hover:scale-105 duration-100">
                        </a>
                        <NSpace vertical class="ml-2 flex-grow w-0">
                            <a target="_blank" :href="comment.user.html_url">
                                <span class="font-bold text-xl hover:text-green-300">{{ comment.user.login }}</span>
                            </a>
                            <NSpace align="center">
                                <NTime :time="new Date(comment.updated_at)" type="relative" />
                                <CReactions class="inline-block" :reactions="comment.reactions" />
                            </NSpace>
                            <NCard :bordered="false" size="small" class="w-full overflow-hidden">
                                <CMarkdown :text="comment.body" class="rounded-lg" :id="comment.id" />
                            </NCard>
                        </NSpace>
                    </div>
                </NCard>
            </NSpace>
            <CLoading :state="cState">
                <template #fail>
                    <div class="text-center">
                        <NButton @click="nextPage" class="mx-auto">
                            重试
                        </NButton>
                    </div>
                </template>
                <COver v-if="isOver" />
                <div v-else class="text-center">
                    <NButton @click="nextPage" class="mx-auto">
                        更多
                    </NButton>
                </div>
            </CLoading>
        </template>
    </NSpace>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { Comment, Issue } from '@miaoji/api';
import awaitTo from 'await-to-js';
import { NButton, NCard, NSpace, NTime } from 'naive-ui';
import { commentApi } from '@/api';
import { hasLabel } from '@/store/app.store';
import { watchLoading } from '@/util/loading';
import CLoading from '&/CLoading.vue';
import CMarkdown from '&/CMarkdown.vue';
import COver from '&/COver.vue';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';

const props = defineProps<{
    issue: Issue,
    name: string
}>();

// 依据留言issue查询相关评论
const comments = ref<Comment[]>([]);
const cState = watchLoading({
    state: 'loading',
    fail: '评论查询失败!'
});
const isOver = ref(false);
let cPage = 1;
const cPerPage = 10;

queryComments(props.issue.number.toString(), cPage);

// 判断评论区是否关闭
const closeComment = computed(() => {
    return props.issue == null
        ? false
        : hasLabel(props.issue.labels, appConfig.label.hiddenCommentLabel);
});

async function queryComments(issueId: string, page: number) {
    cState.value = 'loading';
    const [err, data] = await awaitTo(commentApi.qCommentsByIssueId(issueId, {
        page: page.toString(),
        per_page: cPerPage.toString()
    }));
    if (err) {
        cState.value = 'fail';
        return;
    }
    if (data.length == 0 || data.length < cPerPage) {
        isOver.value = true;
    }
    comments.value.push(...data);
    cState.value = 'success';
}

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