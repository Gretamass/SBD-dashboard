<template>
    <div class="game">
        <div class="game__date date">
            <div class="date__month-day">{{ game.date.monthDay }}</div>
            <div class="date__year">{{ game.date.year }}</div>
        </div>
        <div class="game__info info">
            <div class="info__tournament">{{ game.tournament.name }}</div>
            <div class="info__team">{{ game.homeTeam.name }}</div>
            <div class="info__team">{{ game.awayTeam.name }}</div>
        </div>
        <div class="game__score score">
            <div
                class="score__item"
                :class="{ 'score__item--winning': game.homeTeam.score > game.awayTeam.score }"
            >
                {{ game.homeTeam.score }}
            </div>
            <div
                class="score__item"
                :class="{ 'score__item--winning': game.homeTeam.score < game.awayTeam.score }"
            >
                {{ game.awayTeam.score }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import { useGamePreviewInfo } from '@/composables/gamePreviewInfo';
import type { GamePreview } from '@/stores/main/models/interfaces';

const props = defineProps({
    gameData: {
        type: Object as PropType<GamePreview>,
        required: true
    }
});

const { game } = useGamePreviewInfo(props.gameData);
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.game {
    display: flex;
    align-items: center;

    height: 66px;

    padding: 6px 0;
    box-sizing: border-box;

    border-bottom: 1px solid rgb(var(--secondary-background-color));
}

.date {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(var(--secondary-background-color-item));

    width: 60px;

    &__month-day {
        font-size: 1.4rem;
    }

    &__year {
        font-size: 1rem;
    }
}

.info {
    display: flex;
    flex-direction: column;

    width: 250px;
    height: 100%;

    &__tournament {
        font-size: 1.2rem;

        height: 16px;
        color: rgb(var(--secondary-background-color-item-hover));
    }

    &__team {
        margin-top: auto;

        font-size: 1.4rem;
        color: rgb(var(--secondary-background-color));
    }
}

.score {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    padding-top: 16px;
    box-sizing: border-box;

    height: 100%;

    &__item {
        color: rgb(var(--secondary-background-color));
        font-size: 1.2rem;

        margin-top: auto;

        &--winning {
            border-bottom: 1px solid rgb(var(--accent-orange));
        }
    }
}
</style>
