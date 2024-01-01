<template>
    <NSpace vertical>
        <CSubTitle context="相册" />
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
                            <NTime :time="new Date(photo.updated_at)" type="relative" />更新
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
                        重试
                    </NButton>
                </div>
            </template>
            <COver v-if="isOver" />
            <div v-else class="text-center">
                <NButton @click="nextPage">
                    更多
                </NButton>
            </div>
        </CLoading>
    </NSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CLoading } from '@miaoji/components';
import { COver } from '@miaoji/components';
import { CSubTitle } from '@miaoji/components';
import { watchLoading } from '@miaoji/components';
import { gImages } from '@miaoji/util';
import awaitTo from 'await-to-js';
import { NButton, NCard, NGrid, NGridItem, NSpace, NTime } from 'naive-ui';
import { issueApi } from '@/api';
import { Photo } from '@/api/entity.ext';
import CReactions from '&/CReactions.vue';
import appConfig from '#/app.config';

const perPage = 10;
let page = 1;


const photos = ref<Photo[]>([]);
const pState = watchLoading({
    state: 'loading',
    fail: '相册查询失败!'
});
const isOver = ref(false);

async function queryPhotos(page: number) {
    pState.value = 'loading';
    const [err, data] = await awaitTo(issueApi.qIssuePage({
        labels: appConfig.label.photoLabel,
        state: 'all',
        page: page.toString(),
        per_page: perPage.toString()
    }));
    if (err) {
        pState.value = 'fail';
        return;
    }
    if (data.length == 0 || data.length < perPage) {
        isOver.value = true;
    }
    const p: Photo[] = data.map(d => ({ ...d, images: gImages(d.body) }));
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
</script>@/api/entity.ext