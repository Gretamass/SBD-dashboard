<template>
    <div class="sidebar" :class="{ 'sidebar--expanded': isSidebarExpanded }">
        <div class="sidebar__header header">
            <div class="header__button">
                <fa-icon
                    @click="toggleSidebar"
                    class="header__icon"
                    :class="{ 'header__icon--rotate': !isSidebarExpanded }"
                    :icon="['fas', 'circle-chevron-left']"
                />
            </div>
            <div class="header__title">Sports By Data</div>
        </div>
        <div class="sidebar__navigation navigation">
            <div class="navigation__item navigation__item--selected">
                <fa-icon class="navigation__icon" :icon="['fas', 'house']" />Dashboard
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isSidebarExpanded = ref<boolean>(false);

function toggleSidebar(): void {
    isSidebarExpanded.value = !isSidebarExpanded.value;
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.sidebar {
    display: flex;
    flex-direction: column;

    width: 75px;
    height: 100%;

    background-color: rgb(var(--secondary-background-color));
    overflow: hidden;

    padding: 24px 16px;
    box-sizing: border-box;

    transition: all 0.3s ease-in-out;

    &--expanded {
        width: 250px;
    }
}

.header {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    width: 100%;
    overflow: hidden;

    margin-bottom: 18px;

    &__title {
        font-size: 1.9rem;
        white-space: nowrap;
        width: 0;
    }

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 43px;
        width: 43px;

        margin-left: auto;

        cursor: pointer;

        background-color: rgb(var(--secondary-background-color));
    }

    &__icon {
        font-size: 2.2rem;

        transition: all 0.3s ease-in-out;

        &--rotate {
            transform: rotate(180deg);
        }
    }
}

.navigation {
    display: flex;
    flex-direction: column;

    margin: auto 0;

    &__item {
        display: flex;
        align-items: center;
        gap: 12px;

        padding: 12px;
        border-radius: 6px;

        overflow: hidden;

        font-size: 1.4rem;

        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &--selected {
            background-color: rgb(var(--accent-orange));
            color: rgb(var(--secondary-background-color));
        }

        &:hover {
            background-color: rgb(var(--secondary-background-color-item-hover));
        }
    }

    &__icon {
        font-size: 1.6rem;
    }
}
</style>
