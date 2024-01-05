<template>
    <CLoading :state="pState">
        <template #fail>
            <NCard size="small" :bordered="false">
                <button class="p-2 w-full font-bold" @click="queryPhoto">
                    {{ t('comment.button.retry') }}
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
                            {{ t('comment.span.createAt') }}:
                            <NTime :time="new Date(photo.created_at)" />
                        </span>
                        <span>
                            {{ t('comment.span.updateAt') }}:
                            <NTime :time="new Date(photo.updated_at)" type="relative" />
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
            <CComments :issue="photo" :title="t('page.photoDetails.commentsTitle')" />
        </NSpace>
    </CLoading>
</template>
<script setup lang="ts">
import { onActivated, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Issue } from '@miaoji/api';
import { CLoading, watchLoading } from '@miaoji/components';
import { gImages } from '@miaoji/util';
import { updateTitle } from '@miaoji/util';
import awaitTo from 'await-to-js';
import { AxiosError, AxiosResponse } from 'axios';
import { NCard, NGrid, NGridItem, NImage, NSpace, NTime } from 'naive-ui';
import { issueApi } from '@/api';
import { Photo } from '@/api/entity.ext';
import { hasLabel, removeFuncLabels } from '@/store/app.store';
import CLabel from '&/CLabel.vue';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';
import { uI18n } from '#/locales';
import CComments from './items/CComments.vue';

const { t } = uI18n();
const router = useRouter();

const props = defineProps<{
    id: string
}>();

// 查询文章
const photo = ref<Photo>(null!);
const pState = watchLoading({
    state: 'loading',
    fail: () => t('component.cLoading.fail', { name: t('page.photoDetails.subtitle') })
});

async function queryPhoto() {
    pState.value = 'loading';
    const [err, res] = await awaitTo<AxiosResponse<Issue>, AxiosError>(issueApi.qIssueById(props.id!));
    if (err) {
        if (err?.response?.status == 404) {
            router.replace({ name: 'PNotFound' });
            return;
        }
        pState.value = 'fail';
        return;
    }
    if (!hasLabel(res.data.labels, appConfig.label.photoLabel)) {
        router.replace({ name: 'PNotFound' });
        return;
    }
    photo.value = { ...res.data, images: gImages(res.data.body) };
    pState.value = 'success';
    updateTitle({ after: photo.value.title });
}

queryPhoto();

onActivated(() => {
    photo.value && updateTitle({ after: photo.value.title });
});
</script>