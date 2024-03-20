<template>
    <div class="sidebar">
        <div class="sidebar__item">
            <div class="sidebar__item-title">Tournament</div>
            <SimpleInput v-model="searchValue"><SearchIcon /></SimpleInput>
        </div>
        <div class="sidebar__item">
            <div class="sidebar__item-title">Spectating Team</div>
            <SimpleInput v-model="searchValue"><SearchIcon /></SimpleInput>
        </div>
        <div class="sidebar__item">
            <div class="sidebar__item-title">Opponent Team</div>
            <SimpleInput v-model="searchValue"><SearchIcon /></SimpleInput>
        </div>
        <div class="sidebar__item">
            <div class="sidebar__item-title">Date</div>
            <DatePicker v-model="date" range />
        </div>
    </div>
</template>

<script setup lang="ts">
import SimpleInput from '@/components/ui/SimpleInput.vue';
import { ref } from 'vue';
import SearchIcon from '@/components/ui/icons/SearchIcon.vue';
import DatePicker from '@/components/ui/DatePicker.vue';

const searchValue = ref<string>('');
const date = ref<number>(0);
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.sidebar {
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;

    padding: 12px;
    box-sizing: border-box;

    border-radius: 6px;
    background-color: rgb(var(--secondary-background-color));

    &__item {
        display: flex;
        flex-direction: column;
        gap: 3px;

        margin-bottom: 9px;
    }

    &__item-title {
        font-size: 1.2rem;
    }
}
</style>
