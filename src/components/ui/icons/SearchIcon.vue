<template>
    <div class="search">
        <fa-icon class="search__icon" :icon="['fas', 'search']" />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets/index' as *;

.search {
    display: flex;
    align-items: center;
    gap: 5px;

    color: rgb(var(--secondary-background-color));
    font-size: 1.6rem;

    cursor: pointer;

    &__icon {
        transition: all 0.2s ease-in-out;
    }
}
</style>
