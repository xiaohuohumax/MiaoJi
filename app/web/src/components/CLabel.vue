<template>
    <div class="p-1 text-left text-wrap max-w-full cursor-pointer hover:text-green-300 font-bold flex items-center">
        <div>
            <slot>
                <span class="inline-block p-1 rounded-full shadow-md mr-1" :style="{
                    backgroundColor: '#' + label.color
                }" />
            </slot>
        </div>
        <div>
            {{ label.name }}{{
                hiddenDes
                ? ''
                : (label.description == '' ? '' : `(${label.description})`)
            }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { Label } from '@miaoji/api';

defineProps<{
    label: Label,
    hiddenDes: boolean
}>();
</script>