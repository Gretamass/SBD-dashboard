import { defineStore } from 'pinia';
import type {
    ApiStoreState,
    ConfigurationResponse,
    GamePreviewsResponse
} from '@/stores/api/models/interfaces';
import { useMainStore } from '@/stores/main/mainStore';
import axios from 'axios';

export const useApiStore = defineStore('api', {
    state: (): ApiStoreState => ({ backendUrl: 'https://api.sportsbydata.com' }),
    actions: {
        async fetchGamesPreviews(): Promise<GamePreviewsResponse> {
            const { organizationUuid } = useMainStore();
            const { data } = await axios.get<GamePreviewsResponse>(
                `${this.backendUrl}/organization/${organizationUuid}/game/preview`
            );

            return data;
        },
        async fetchOrganizationConfiguration(): Promise<ConfigurationResponse> {
            const { organizationUuid } = useMainStore();
            const { data } = await axios.get<ConfigurationResponse>(
                `${this.backendUrl}/organization/${organizationUuid}/config`
            );

            return data;
        }
    },
    getters: {}
});
