<template>
    <NSpace vertical>
        <CSubTitle context="标签"/>
        <NCard size='small' :bordered="false" v-show="issuesStore.notFuncLabels.length > 0">
            <NSpace>
                <NButton ghost class="max-w-full" v-for="label in issuesStore.notFuncLabels" :key="label.name"
                    @click="gotoHome(label)" :color="'#' + label.color">
                    <CLabel class="truncate" :label="label" :hidden-des="false" />
                </NButton>
            </NSpace>
        </NCard>
        <COver />
    </NSpace>
    <CLoading :state="lState" class="my-2">
        <template #fail>
            <div class="text-center">
                <NButton @click="refresh" class="mx-auto">
                    重试
                </NButton>
            </div>
        </template>
        <!-- 暂时影藏 -->
        <div class="text-center">
            <NButton @click="refresh" class="mx-auto">
                刷新
            </NButton>
        </div>
    </CLoading>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Label } from '@miaoji/api';
import awaitTo from 'await-to-js';
import { NButton, NCard, NSpace } from 'naive-ui';
import CSubTitle from '@/components/CSubTitle.vue';
import { useAppStore } from '@/store/app.store';
import { watchLoading } from '@/util/loading';
import CLabel from '&/CLabel.vue';
import CLoading from '&/CLoading.vue';
import COver from '&/COver.vue';

const issuesStore = useAppStore();
const router = useRouter();
const lState = watchLoading({
    state: 'success',
    fail: '标签刷新失败!',
    success: '标签刷新成功!'
});

async function refresh() {
    lState.value = 'loading';
    const [err] = await awaitTo(issuesStore.loadLabels(1));
    lState.value = err ? 'fail' : 'success';
}

function gotoHome(label: Label) {
    router.push({ path: '/', query: { label: label.name } });
}
</script>