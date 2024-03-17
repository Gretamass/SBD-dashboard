<template>
    <div class="selector" :class="{ 'selector--disabled': disabled }">
        <div class="selector__selected" @click="toggleDropdown">
            <div class="selector__selected-text">{{ textFormat(model) }}</div>
            <ChevronToggleIcon :up-chevron="showDropdown" />
        </div>
        <div v-show="showDropdown" class="selector__dropdown dropdown">
            <div
                v-for="option in options"
                :key="option"
                class="dropdown__item"
                @click="selectOption(option)"
            >
                {{ textFormat(option) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ChevronToggleIcon from '@/components/ui/icons/ChevronToggleIcon.vue';
import { type PropType, ref } from 'vue';

defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    options: {
        type: Array as PropType<string[]>,
        default: () => []
    },
    textFormat: {
        type: Function,
        default: (str: string) => str
    }
});

const model = defineModel<string>({ required: true });

const showDropdown = ref<boolean>(false);

function toggleDropdown(): void {
    showDropdown.value = !showDropdown.value;
}

function closeDropdown(): void {
    showDropdown.value = false;
}

function selectOption(uuid: string): void {
    model.value = uuid;

    closeDropdown();
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.selector {
    display: flex;

    position: relative;

    cursor: pointer;

    &--disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    &__selected {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 30px;
        width: 100%;

        border: 1px solid rgb(var(--secondary-background-color-item-hover));
        border-radius: 6px;

        padding: 0 12px;

        color: rgb(var(--secondary-background-color));
    }

    &__selected-text {
        font-size: 1.4rem;
    }
}

.dropdown {
    position: absolute;
    top: 29px;
    z-index: 1;

    width: 100%;
    max-height: 150px;
    overflow: auto;

    background-color: rgb(var(--secondary-background-color-item));

    &__item {
        display: flex;
        align-items: center;

        height: 30px;

        padding: 0 12px;

        font-size: 1.3rem;

        &:not(:last-child) {
            border-bottom: 1px solid rgb(var(--secondary-background-color-item-hover));
        }

        &:hover {
            background-color: rgb(var(--secondary-background-color-item-hover));
        }
    }
}
</style>
