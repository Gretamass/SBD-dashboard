<template>
    <div class="input">
        <input v-model="model" class="input__input-field" />
        <slot />
    </div>
</template>

<script setup lang="ts">
const model = defineModel<string>({ required: true });
</script>

<style scoped lang="scss">
.input {
    display: flex;
    gap: 6px;
    height: 30px;
    width: 100%;

    background-color: rgb(var(--primary-background-color));
    border-radius: 6px;

    color: rgb(var(--secondary-background-color));

    padding: 0 12px;
    box-sizing: border-box;

    &__input-field {
        background-color: inherit;
        border-radius: inherit;
        width: inherit;
    }
}
</style>
