<template>
    <div class="team-logo">
        <img
            v-if="teams.getTeamLogo(teamUuid)"
            :src="teams.getTeamLogo(teamUuid)"
            :alt="teamName"
            class="team-logo__image"
        />
        <div v-else class="team-logo__invalid" />
    </div>
</template>

<script setup lang="ts">
import { useTeamsInfo } from '@/composables/teamsInfo';

defineProps({
    teamUuid: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    }
});

const { teams } = useTeamsInfo();
</script>

<style scoped lang="scss">
.team-logo {
    height: 60px;
    width: 60px;

    &__image {
        height: 100%;
        width: 100%;
    }

    &__invalid {
        height: 100%;
        width: 100%;

        background-color: rgb(var(--secondary-background-color-item-hover));
        border-radius: 50%;
    }
}
</style>
