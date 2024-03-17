<template>
    <div class="modal__overlay">
        <div class="modal">
            <div class="modal__header header">
                <div class="header__title">
                    <slot name="header" />
                </div>
                <XMarkIcon />
            </div>
            <div class="modal__content content">
                <slot name="content" />
            </div>
            <div class="modal__footer footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import XMarkIcon from '@/components/ui/icons/XMarkIcon.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.modal {
    height: fit-content;
    max-height: 95%;
    width: 600px;
    max-width: 95dvw;

    overflow: auto;

    background-color: rgb(var(--primary-background-color));
    border-radius: 6px;

    &__overlay {
        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: rgba(var(--secondary-background-color), 0.6);
    }
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 42px;
    width: 100%;

    padding: 0 24px;
    box-sizing: border-box;

    background-color: rgba(var(--secondary-background-color));

    &__title {
        font-size: 1.5rem;
    }
}

.content {
    padding: 12px 24px;
}

.footer {
    padding: 12px 24px;
}
</style>
