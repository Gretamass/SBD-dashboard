<template>
    <BaseModal>
        <template #header>Create A New Game</template>
        <template #content>
            <div class="form">
                <div class="form__item item">
                    <div class="item__title">LEAGUE</div>
                    <DropdownSelector
                        v-model="league"
                        :options="tournamentUuids"
                        :text-format="getTournamentName"
                    />
                </div>
                <div class="form__item item">
                    <div class="item__title">SPECTATING TEAM</div>
                    <DropdownSelector
                        v-model="spectatingTeam"
                        :options="teamsFromLeague(league)"
                        :text-format="getTeamName"
                        :disabled="disableTeamSelector"
                    />
                </div>
                <div class="form__item item">
                    <div class="item__title">OPPONENT TEAM</div>
                    <DropdownSelector
                        v-model="opponentTeam"
                        :options="teamsFromLeague(league)"
                        :text-format="getTeamName"
                        :disabled="disableTeamSelector"
                    />
                </div>
                <div class="form__item item">
                    <div class="item__title">DATE</div>
                    <DatePicker v-model="date" />
                </div>
                <div class="form__item item">
                    <div class="item__title">SCOUTING TYPE</div>
                    <DropdownSelector
                        v-model="scoutingType"
                        :options="Object.values(ScoutingType)"
                        :text-format="getScoutingTypeTranslation"
                    />
                </div>
                <div class="form__item item">
                    <div class="item__title">SCOUTING MODE</div>
                    <DropdownSelector
                        v-model="scoutingMode"
                        :options="Object.values(ScoutingMode)"
                        :text-format="getScoutingModeTranslation"
                    />
                </div>
            </div>
        </template>
        <template #footer>
            <div class="action-buttons">
                <SimpleButton :type="ButtonType.SECONDARY">Cancel</SimpleButton>
                <SimpleButton>Start Game</SimpleButton>
            </div>
        </template>
    </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/modals/BaseModal.vue';
import SimpleButton from '@/components/ui/SimpleButton.vue';
import { ButtonType } from '@/components/ui/enumerators';
import DropdownSelector from '@/components/ui/DropdownSelector.vue';
import { computed, ref } from 'vue';
import { useMainStore } from '@/stores/main/mainStore';
import { storeToRefs } from 'pinia';
import { ScoutingMode, ScoutingType } from '@/stores/main/models/enumerators';
import DatePicker from '@/components/ui/DatePicker.vue';
import { DateTime } from 'luxon';

const {
    tournamentUuids,
    getTournamentName,
    teamsFromLeague,
    getTeamName,
    getScoutingTypeTranslation,
    getScoutingModeTranslation
} = storeToRefs(useMainStore());

const league = ref<string>('');
const spectatingTeam = ref<string>('');
const opponentTeam = ref<string>('');
const date = ref<string>(DateTime.now().toMillis());
const scoutingType = ref<ScoutingType>(ScoutingType.ATTACK_AND_DEFENCE);
const scoutingMode = ref<ScoutingMode>(ScoutingMode.BASIC);

const disableTeamSelector = computed<boolean>(() => {
    return !league.value;
});
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.item {
    display: flex;
    flex-direction: column;
    gap: 6px;

    &__title {
        font-size: 1.2rem;
        color: rgb(var(--secondary-background-color-item));
    }
}

.action-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
