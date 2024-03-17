<template>
    <div class="x-mark">
        <fa-icon class="x-mark__icon" :icon="['fas', 'xmark']" />
        <slot />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets/index' as *;

.x-mark {
    display: flex;
    align-items: center;
    gap: 5px;

    font-size: 1.6rem;

    cursor: pointer;

    &__icon {
        transition: all 0.2s ease-in-out;
    }

    &:hover {
        color: rgb(var(--system-red));

        &:not(.x-mark--no-hover) {
            .x-mark__icon {
                transform: scale(1.2);
            }
        }
    }
}

.grey {
    color: rgb(var(--main-second-background-hover));
}

.light-grey {
    color: rgb(var(--system-grey));
}

.red {
    color: rgb(var(--system-red));
}
</style>
