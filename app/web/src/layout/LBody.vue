<template>
    <div class="container mx-auto">
        <router-view v-slot="{ Component, route }">
            <keep-alive>
                <component :is="Component" v-if="route.meta.keepAlive" :key="route.fullPath"></component>
            </keep-alive>
            <component :is="Component" v-if="!route.meta.keepAlive" :key="route.fullPath"></component>
        </router-view>
    </div>
</template>