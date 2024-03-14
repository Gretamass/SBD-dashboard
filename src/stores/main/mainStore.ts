import { defineStore } from 'pinia';
import type { MainStoreState } from '@/stores/main/models/interfaces';
import { useApiStore } from '@/stores/api/apiStore';

export const useMainStore = defineStore('main', {
    state: (): MainStoreState => ({
        organizationUuid: '79d079df-edff-4386-87ba-4767ac55f804',
        configuration: {
            actions: [],
            outcomes: [],
            teams: [],
            tournaments: []
        },
        gamePreviews: []
    }),
    actions: {
        async initApp(): Promise<void> {
            const { fetchOrganizationConfiguration, fetchGamesPreviews } = useApiStore();

            await fetchOrganizationConfiguration().then((response) => {
                this.configuration = response;
            });

            await fetchGamesPreviews().then((response) => {
                this.gamePreviews = response;
            });
        }
    },
    getters: {
        loggedGamesCount: (state: MainStoreState): number => {
            return state.gamePreviews.length;
        },
        latestGamesList: (state: MainStoreState): number => {
            return state.gamePreviews.splice(0, 6);
        }
    }
});
