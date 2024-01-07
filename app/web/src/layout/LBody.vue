<template>
    <div class="container mx-auto">
        <router-view v-slot="{ Component, route }">
            <keep-alive v-if="route.meta.keepAlive">
                <component :is="Component" :key="route.fullPath"></component>
            </keep-alive>
            <component :is="Component" v-else :key="route.fullPath"></component>
        </router-view>
    </div>
</template>