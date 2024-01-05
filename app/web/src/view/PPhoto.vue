<template>
    <NSpace vertical>
        <CSubTitle :context="t('page.photo.subtitle')" />
        <NGrid cols="1 s:2 m:3 l:4 xl:5 2xl:6" responsive="screen" :x-gap="8" :y-gap="8" v-if="photos.length > 0">
            <NGridItem class="group cursor-pointer" v-for="photo in photos" :key="photo.number"
                @click="$router.push('/photo/' + photo.number)">
                <NCard size="small" :bordered="false">
                    <img class="object-cover rounded-md" :src="photo.images[0]?.src" :alt="photo.images[0]?.alt">
                    <NSpace vertical>
                        <div class="text-lg mt-2 group-hover:text-green-300">
                            {{ photo.title }}
                        </div>
                        <div>
                            {{ t('comment.span.createAt') }}:
                            <NTime :time="new Date(photo.updated_at)" type="relative" />
                        </div>
                        <CReactions :reactions="photo.reactions" />
                    </NSpace>
                </NCard>
            </NGridItem>
        </NGrid>
        <CLoading :state="pState">
            <template #fail>
                <div class="text-center">
                    <NButton @click="nextPage">
                        {{ t('comment.button.retry') }}
                    </NButton>
                </div>
            </template>
            <COver v-if="isOver" :context="t('component.cOver.context')" />
            <div v-else class="text-center">
                <NButton @click="nextPage">
                    {{ t('comment.button.more') }}
                </NButton>
            </div>
        </CLoading>
    </NSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CLoading, COver, CSubTitle, watchLoading } from '@miaoji/components';
import { gImages } from '@miaoji/util';
import awaitTo from 'await-to-js';
import { NButton, NCard, NGrid, NGridItem, NSpace, NTime } from 'naive-ui';
import { issueApi } from '@/api';
import { Photo } from '@/api/entity.ext';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';
import { uI18n } from '#/locales';

const perPage = 10;
let page = 1;

const { t } = uI18n();

const photos = ref<Photo[]>([]);
const pState = watchLoading({
    state: 'loading',
    fail: () => t('component.cLoading.fail', { name: t('page.photo.subtitle') })
});
const isOver = ref(false);

async function queryPhotos(page: number) {
    pState.value = 'loading';
    const [err, res] = await awaitTo(issueApi.qIssuePage({
        labels: appConfig.label.photoLabel,
        state: 'all',
        page: page.toString(),
        per_page: perPage.toString()
    }));
    if (err) {
        pState.value = 'fail';
        return;
    }
    if (res.data.length == 0 || res.data.length < perPage) {
        isOver.value = true;
    }
    const p: Photo[] = res.data.map(d => ({ ...d, images: gImages(d.body) }));
    photos.value.push(...p);
    pState.value = 'success';
}

queryPhotos(page);

function nextPage() {
    const oldSize = photos.value.length;
    const nPage = page + 1;
    queryPhotos(nPage).then(() => {
        if (oldSize != photos.value.length) {
            page += nPage;
        }
    });
}
</script>