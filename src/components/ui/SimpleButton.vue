<template>
    <button class="button" :class="type" :disabled="disabled">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { ButtonType } from '@/components/ui/enumerators';
import type { PropType } from 'vue';

defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    type: {
        type: String as PropType<ButtonType>,
        default: ButtonType.PRIMARY
    }
});
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 30px;
    border-radius: 6px;

    font-size: 1.2rem;

    padding: 0 20px;

    cursor: pointer;

    transition: all 0.2s;

    &:disabled {
        opacity: 0.65;
        cursor: default;
    }

    &:hover:not(&:disabled) {
        transform: scale(1.05);
    }
}

.primary {
    background-color: rgb(var(--accent-orange));
    color: rgb(var(--secondary-background-color));
}

.secondary {
    background-color: transparent;

    border: 1px solid rgb(var(--secondary-background-color));
    color: rgb(var(--secondary-background-color));
}
</style>
