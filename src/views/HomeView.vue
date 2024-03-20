<template>
    <div class="dashboard">
        <PreviousGames />
        <PointsPerTournament />
    </div>
</template>

<script setup lang="ts">
import PreviousGames from '@/components/dashboard/previous-games/PreviousGames.vue';
import PointsPerTournament from '@/components/dashboard/points-per-tournament/PointsPerTournament.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.dashboard {
    display: flex;
    flex-direction: column;

    padding: 18px;

    gap: 12px;
}
</style>
