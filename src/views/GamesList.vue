<template>
    <div class="games-list">
        <GamesListSidebar class="games-list__sidebar" />
        <div class="games-list__body body">
            <div class="body__title">Previous Games List</div>
            <div class="body__list">
                <GameItem v-for="game in latestGamesList" :key="game.uuid" :game-data="game" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMainStore } from '@/stores/main/mainStore';
import GamesListSidebar from '@/components/games-list/GamesListSidebar.vue';
import GameItem from '@/components/games-list/GameItem.vue';

const { latestGamesList } = storeToRefs(useMainStore());
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.games-list {
    display: flex;
    gap: 12px;

    padding: 12px;
    box-sizing: border-box;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }

    &__sidebar {
        width: 40%;
        max-width: 400px;

        @media only screen and (max-width: 1000px) {
            width: 100%;
            max-width: 100%;
        }
    }
}

.body {
    display: flex;
    flex-direction: column;
    flex: 1;

    padding: 12px;
    box-sizing: border-box;

    border-radius: 6px;
    box-shadow: 2px 5px 20px rgb(var(--secondary-background-color-item-hover));

    &__title {
        display: flex;
        align-items: center;
        gap: 6px;

        width: 100%;

        font-size: 1.6rem;
        color: rgb(var(--secondary-background-color));

        margin-bottom: 12px;
    }

    &__list {
        overflow: scroll;

        display: flex;
        flex-direction: column;
        gap: 6px;
    }
}
</style>
