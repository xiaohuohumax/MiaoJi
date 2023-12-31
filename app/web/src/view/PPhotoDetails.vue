<template>
    <CLoading :state="pState">
        <template #fail>
            <NCard size="small" :bordered="false">
                <button class="p-2 w-full font-bold" @click="queryPhoto">
                    重新加载
                </button>
            </NCard>
        </template>
        <NSpace vertical>
            <NCard size="small" :bordered="false">
                <NSpace class="text-sm relative" vertical>
                    <p class="text-2xl font-bold align-middle">
                        {{ photo.title }}
                    </p>
                    <NSpace>
                        <a target="_blank" :href="photo.user.html_url">
                            <span>{{ photo.user.login }}</span>
                        </a>
                        <span>
                            <NTime :time="new Date(photo.created_at)" />
                        </span>
                        <span>
                            <NTime :time="new Date(photo.updated_at)" type="relative" />更新
                        </span>
                    </NSpace>
                    <NSpace align="center">
                        <CLabel v-for="label in removeFuncLabels(photo.labels)" :key="label.id" :hidden-des="true"
                            @click="$router.push({ path: '/', query: { label: label.name } })" :label="label"
                            class="font-bold" />
                        <CReactions :reactions="photo.reactions" />
                    </NSpace>
                    <NGrid cols="1 s:2 m:3 l:4 xl:5 2xl:6" responsive="screen" :x-gap="8">
                        <NGridItem v-for="img in photo.images" :key="img.src">
                            <NImage class="rounded-md" :src="img.src" :alt="img.alt" />
                        </NGridItem>
                    </NGrid>
                </NSpace>
            </NCard>
            <CComments :issue="photo" name="评论" />
        </NSpace>
    </CLoading>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { gImages } from '@miaoji/util';
import { updateTitle } from '@miaoji/util';
import awaitTo from 'await-to-js';
import { NCard, NGrid, NGridItem, NImage, NSpace, NTime } from 'naive-ui';
import { issueApi } from '@/api';
import { Photo } from '@/api/entry.ext';
import { removeFuncLabels } from '@/store/app.store';
import { watchLoading } from '@/util/loading';
import CLabel from '&/CLabel.vue';
import CLoading from '&/CLoading.vue';
import CReactions from '&/CReactions.vue';
import CComments from './items/CComments.vue';

const props = defineProps<{
    id: string
}>();

// 查询文章
const photo = ref<Photo>(null!);
const pState = watchLoading({
    state: 'loading',
    fail: '文章查询失败!'
});

async function queryPhoto() {
    pState.value = 'loading';
    const [err, data] = await awaitTo(issueApi.qIssueById(props.id!));
    if (err || data == null) {
        pState.value = 'fail';
        return;
    }
    photo.value = { ...data, images: gImages(data.body) };
    pState.value = 'success';
    updateTitle({ after: photo.value.title });
}

queryPhoto();
</script>