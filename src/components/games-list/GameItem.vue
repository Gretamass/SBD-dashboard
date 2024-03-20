<template>
    <div class="game">
        <div class="game__tournament">
            <div class="game__tournament-text">
                {{ game.tournament.name }}
            </div>
        </div>
        <div class="game__info">
            <div class="game__team-logo">
                <TeamLogo :team-uuid="game.homeTeam.uuid" :team-name="game.homeTeam.name" />
            </div>
            <div class="game__team game__team--home">
                <div class="game__team-name game__team-name--home">{{ game.homeTeam.name }}</div>
                <div
                    class="game__team-score"
                    :class="{
                        'game__team-score--winning': game.homeTeam.score > game.awayTeam.score
                    }"
                >
                    {{ game.homeTeam.score }}
                </div>
            </div>
            <div class="game__team game__team--away">
                <div class="game__team-name game__team-name--away">{{ game.awayTeam.name }}</div>
                <div
                    class="game__team-score"
                    :class="{
                        'game__team-score--winning': game.awayTeam.score > game.homeTeam.score
                    }"
                >
                    {{ game.awayTeam.score }}
                </div>
            </div>
            <div class="game__team-logo">
                <TeamLogo :team-uuid="game.awayTeam.uuid" :team-name="game.awayTeam.name" />
            </div>
        </div>
        <div class="game__date date">
            {{ game.date.full }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import type { GamePreview } from '@/stores/main/models/interfaces';
import { useGamePreviewInfo } from '@/composables/gamePreviewInfo';
import TeamLogo from '@/components/ui/TeamLogo.vue';

const props = defineProps({
    gameData: {
        type: Object as PropType<GamePreview>,
        required: true
    }
});

const { game } = useGamePreviewInfo(props.gameData);
</script>

<style scoped lang="scss">
.game {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    color: rgb(var(--secondary-background-color));
    border: 1px solid rgb(var(--secondary-background-color-item-hover));
    border-radius: 6px;
    box-sizing: border-box;

    &__team-logo {
        height: 100%;
        margin: 0 12px;
    }

    &__info {
        display: flex;
        align-items: center;
        justify-content: center;

        flex: 1;
        height: 100%;
        width: 100%;

        margin: 6px 0;
    }

    &__team {
        display: flex;
        align-items: center;
        gap: 12px;

        flex: 1;

        margin: auto 9px;

        &--home {
            flex-direction: row;
            justify-content: flex-end;
        }

        &--away {
            flex-direction: row-reverse;
            justify-content: flex-end;
        }
    }

    &__team-name {
        flex: 1;
        font-size: 1.6rem;
        text-align: center;

        &--home {
            text-align: right;
        }

        &--away {
            text-align: left;
        }
    }

    &__team-score {
        font-size: 2.2rem;

        background-color: rgb(var(--secondary-background-color-item));
        color: rgb(var(--text-color));

        padding: 3px 6px;
        border-radius: 6px;

        &--winning {
            background-color: rgb(var(--accent-orange));
            color: rgb(var(--primary-text-color));
        }
    }

    &__tournament {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;

        width: 100%;

        box-sizing: border-box;

        font-size: 1.4rem;

        background-color: rgb(var(--secondary-background-color));
        color: rgb(var(--text-color));
        border-radius: 6px 6px 0 0;
    }

    &__tournament-text {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;

        padding: 6px;
        box-sizing: border-box;

        color: rgb(var(--text-color));
        border-radius: 6px 0 6px 0;
    }
}

.date {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgb(var(--secondary-background-color));

    width: 100px;
    border-radius: 6px 6px 0 0;

    font-size: 1.2rem;
    color: rgb(var(--text-color));

    padding: 3px 0;
    box-sizing: border-box;
}
</style>
