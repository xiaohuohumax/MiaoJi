<template>
    <div class="p-1 text-left text-wrap max-w-full cursor-pointer hover:scale-105 duration-100">
        <span class="inline-block p-1 rounded-full shadow-md" :style="{
            backgroundColor: '#' + label.color
        }" />
        {{ label.name }}{{ hiddenDes ? '' : `(${label.description})` }}
    </div>
</template>
<script setup lang="ts">
import { Label } from '@miaoji/api';
defineProps<{
    label: Label,
    hiddenDes: boolean
}>();
</script>