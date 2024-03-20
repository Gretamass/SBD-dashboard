<template>
    <div class="team-logo">
        <img
            :src="tournaments.getTournamentLogo(tournamentUuid)"
            :alt="tournamentName"
            class="team-logo__image"
        />
    </div>
</template>

<script setup lang="ts">
import { useTournamentsInfo } from '@/composables/tournamentsInfo';

defineProps({
    tournamentUuid: {
        type: String,
        required: true
    },
    tournamentName: {
        type: String,
        required: true
    }
});

const { tournaments } = useTournamentsInfo();
</script>

<style scoped lang="scss">
.team-logo {
    height: 18px;
    width: 18px;

    &__image {
        height: 100%;
        width: 100%;
    }
}
</style>
