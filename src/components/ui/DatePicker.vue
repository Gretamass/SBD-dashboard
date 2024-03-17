<template>
    <VueDatePicker
        v-model="date"
        :enable-time-picker="false"
        :month-change-on-scroll="false"
        :format="format"
        model-type="timestamp"
        auto-apply
        class="date-picker"
        hide-input-icon
        dark
    ></VueDatePicker>
</template>

<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { DateTime } from 'luxon';

const date = defineModel<string>({ required: true });

function format(date: Date | string): string {
    return DateTime.fromJSDate(new Date(date)).toLocaleString(DateTime.DATE_FULL);
}
</script>

<style lang="scss">
@use '@/assets' as *;

.date-picker {
    --dp-font-size: 1.4rem;
}

.dp__theme_dark {
    --dp-background-color: rgb(var(--primary-background-color));
    --dp-text-color: rgb(var(--primary-text-color));
    --dp-primary-color: rgb(var(--accent-orange));
    --dp-icon-color: rgb(var(--primary-text-color));
}
</style>
