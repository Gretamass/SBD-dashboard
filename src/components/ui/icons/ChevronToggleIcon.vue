<template>
    <div class="chevron">
        <fa-icon
            class="chevron__icon"
            :class="{
                'chevron__icon--rotated': !upChevron
            }"
            :icon="['fas', 'chevron-up']"
        />
    </div>
</template>

<script setup lang="ts">
defineProps({
    upChevron: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.chevron {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &__icon {
        font-size: inherit;
        color: rgb(var(--primary-text-color));

        transition: all 0.2s;
        transform: rotate(0);

        &--rotated {
            transform: rotate(-180deg);
        }
    }
}
</style>
