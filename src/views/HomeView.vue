<template>
    <div class="dashboard">
        <PreviousGames />
    </div>
</template>

<script setup lang="ts">
import PreviousGames from '@/components/dashboard/PreviousGames.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.dashboard {
    display: flex;
    flex-direction: column;

    margin: 18px;
}
</style>
