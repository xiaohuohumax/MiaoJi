<template>
    <div class="flex flex-col min-h-svh">
        <LHeader />
        <LBody class="my-2 flex-grow" />
        <LFooter />
    </div>
    <NBackTop :bottom="40" :right="40" :visibility-height="300" class="hidden md:flex  dark:text-green-300 text-orange-500">
        <ToTop size="1.5em" />
    </NBackTop>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ToTop } from '@icon-park/vue-next';
import { NBackTop, useMessage } from 'naive-ui';
import { useLoadingBar } from 'naive-ui';
import LBody from './LBody.vue';
import LFooter from './LFooter.vue';
import LHeader from './LHeader.vue';

window.$message = useMessage();

const router = useRouter();
const bar = useLoadingBar();

router.beforeEach((_to, _from, next) => {
    bar.start();
    next();
});

router.afterEach(() => bar.finish());
</script>