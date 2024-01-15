<template>
    <div class="container mx-auto">
        <router-view v-slot="{ Component, route }">
            <keep-alive>
                <component v-if="route.meta.keepAlive" :is="Component" :key="route.fullPath"></component>
            </keep-alive>
            <component v-if="!route.meta.keepAlive" :is="Component" :key="route.fullPath"></component>
        </router-view>
    </div>
</template>