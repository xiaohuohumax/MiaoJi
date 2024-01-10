<template>
    <div>
        <slot name="loading" v-if="state == 'loading'">
            <NCard size="small" :bordered="false" class="text-center">
                <NIcon size="30">
                    <Loading class="animate-spin inline-block" />
                </NIcon>
            </NCard>
        </slot>
        <slot name="fail" v-else-if="state == 'fail'">
            <NCard size="small" :bordered="false" class="text-center">
                <NIcon size="30">
                    <Caution class="inline-block" />
                </NIcon>
            </NCard>
        </slot>
        <slot v-else-if="state == 'success'" />
    </div>
</template>

<script setup lang="ts">
import { Caution, Loading } from '@icon-park/vue-next';
import { NCard, NIcon } from 'naive-ui';
import { LoadingState } from '../util/loading';
defineProps<{
    state: LoadingState
}>();
</script>