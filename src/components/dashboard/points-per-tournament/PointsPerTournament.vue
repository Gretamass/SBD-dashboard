<template>
    <div class="section">
        <div class="games__header header">
            <div class="header__title">Points Per Game in Tournament</div>
            <div class="toggle">
                <div class="toggle__selected"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    display: flex;
    flex-direction: column;

    border-radius: 6px;

    padding: 12px;
    box-sizing: border-box;

    max-width: 600px;

    box-shadow: 2px 5px 20px rgb(var(--secondary-background-color-item-hover));
}

.header {
    display: flex;
    align-items: center;

    margin-bottom: 12px;

    &__title {
        font-size: 1.6rem;
        color: rgb(var(--secondary-background-color));
    }
}
</style>
