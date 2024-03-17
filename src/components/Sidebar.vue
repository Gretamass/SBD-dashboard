<template>
    <div class="sidebar" :class="{ 'sidebar--expanded': isSidebarExpanded }">
        <div class="sidebar__header header">
            <div class="header__button">
                <fa-icon
                    :class="{ 'header__icon--rotate': !isSidebarExpanded }"
                    :icon="['fas', 'circle-chevron-left']"
                    class="header__icon"
                    @click="toggleSidebar"
                />
            </div>
            <div class="header__title">Sports By Data</div>
        </div>
        <div class="sidebar__navigation navigation">
            <div
                class="navigation__item"
                :class="{
                    'navigation__item--expanded': isSidebarExpanded,
                    'navigation__item--selected': route.name === Route.DASHBOARD
                }"
            >
                <div class="navigation__icon">
                    <fa-icon :icon="['fas', 'house']" />
                </div>
                <div v-if="isSidebarExpanded" class="navigation__item-text">Dashboard</div>
            </div>
            <div
                class="navigation__item"
                :class="{
                    'navigation__item--expanded': isSidebarExpanded,
                    'navigation__item--selected': route.name === Route.NEW_MATCH
                }"
            >
                <div class="navigation__icon">
                    <fa-icon :icon="['fas', 'plus']" />
                </div>
                <div v-if="isSidebarExpanded" class="navigation__item-text">Create New Match</div>
            </div>
        </div>
    </div>
    <CreateNewGameModal />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Route } from '@/router/models/enumerators';
import CreateNewGameModal from '@/components/modals/CreateNewGameModal.vue';

const isSidebarExpanded = ref<boolean>(false);

const route = useRoute();

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
    justify-content: center;
    gap: 12px;

    padding-bottom: 60px;

    margin: auto 0;

    &__item {
        display: flex;
        align-items: center;

        width: 42px;

        white-space: nowrap;
        background-color: rgb(var(--secondary-background-color-item));

        border-radius: 6px;

        overflow: hidden;

        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &--expanded {
            width: 100%;
        }

        &:hover {
            background-color: rgb(var(--secondary-background-color-item-hover));

            transform: scale(1.05);
        }

        &--selected {
            background-color: rgb(var(--accent-orange));
            color: rgb(var(--secondary-background-color));

            &:hover {
                background-color: rgb(var(--accent-orange));
            }
        }
    }

    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 42px;
        width: 42px;

        font-size: 1.7rem;
    }

    &__item-text {
        font-size: 1.4rem;
        width: 0;
    }
}
</style>
