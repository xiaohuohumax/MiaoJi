<template>
    <NSpace>
        <span v-for="key in rKeys" :key="key">
            {{ reMap[key] }} {{ reactions[key] }}
        </span>
    </NSpace>
</template>
<script setup lang="ts">
import { Reactions } from '@miaoji/api';
import { NSpace } from 'naive-ui';
const props = defineProps<{
    reactions: Reactions
}>();

const reMap: {
    [key: string]: string
} = {
    '+1': '👍',
    '-1': '👎',
    laugh: '😄',
    hooray: '🎉',
    confused: '😕',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
};

const rKeys = Object.keys(reMap).filter(key => props.reactions[key] > 0);
</script>