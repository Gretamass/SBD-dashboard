<template>
    <div class="games">
        <div class="games__header header">
            <div class="header__title">
                <div class="header__count">{{ loggedGamesCount }}</div>
                Previous Games
            </div>
            <!--    TODO: add view all previous games button    -->
            <!--    TODO: add search    -->
        </div>
        <div class="games__list list">
            <PreviousGameItem v-for="game in latestGamesList" :key="game.uuid" :game-data="game" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMainStore } from '@/stores/main/mainStore';
import PreviousGameItem from '@/components/dashboard/previous-games/PreviousGameItem.vue';

const { loggedGamesCount, latestGamesList } = storeToRefs(useMainStore());
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.games {
    display: flex;
    flex-direction: column;

    border-radius: 6px;

    padding: 12px;
    box-sizing: border-box;

    max-width: 350px;

    box-shadow: 2px 5px 20px rgb(var(--secondary-background-color-item-hover));
}

.header {
    display: flex;
    align-items: center;
    width: 100%;

    margin-bottom: 12px;

    &__title {
        display: flex;
        align-items: center;
        gap: 6px;

        width: 100%;

        font-size: 1.6rem;
        color: rgb(var(--secondary-background-color));
    }

    &__count {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 24px;
        width: 24px;

        background-color: rgb(var(--secondary-background-color-item));
        border-radius: 60px;

        font-size: 1.2rem;
        color: rgb(var(--primary-background-color));
    }
}
</style>
