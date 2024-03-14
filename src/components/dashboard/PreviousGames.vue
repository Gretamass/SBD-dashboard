<template>
    <div class="games">
        <div class="games__header header">
            <div class="header__title">Previous Games ({{ loggedGamesCount }})</div>
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
import PreviousGameItem from '@/components/dashboard/PreviousGameItem.vue';

const { loggedGamesCount, latestGamesList } = storeToRefs(useMainStore());
</script>

<style scoped lang="scss">
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

    margin-bottom: 12px;

    &__title {
        font-size: 1.6rem;
        color: rgb(var(--secondary-background-color));
    }
}
</style>
