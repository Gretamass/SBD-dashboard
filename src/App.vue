<template>
    <div class="page">
        <Sidebar class="page__sidebar" />
        <RouterView class="page__content" />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue';
import { useMainStore } from '@/stores/main/mainStore';

const { initApp } = useMainStore();

initApp();
</script>

<style lang="scss">
@use '@/assets' as *;

html {
    font-size: 10px;
}

body {
    font-family: 'Euclid Circular A', sans-serif;
    background-color: rgb(var(--primary-background-color));
    color: rgb(var(--text-color));
}

#app {
    height: 100vh;
}

.page {
    display: flex;

    width: 100%;
    height: 100%;

    &__content {
        flex: 1;
    }
}
</style>
