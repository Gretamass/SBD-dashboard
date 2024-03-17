import { defineStore } from 'pinia';
import type {
    GamePreview,
    MainStoreState,
    Team,
    Tournament
} from '@/stores/main/models/interfaces';
import { useApiStore } from '@/stores/api/apiStore';
import { ScoutingMode, ScoutingType } from '@/stores/main/models/enumerators';

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
        loggedGamesCount(state: MainStoreState): number {
            return state.gamePreviews.length;
        },
        latestGamesList(state: MainStoreState): GamePreview[] {
            return state.gamePreviews.splice(0, 6);
        },
        tournaments(state: MainStoreState): Tournament[] {
            return state.configuration.tournaments;
        },
        teams(state: MainStoreState): Team[] {
            return state.configuration.teams;
        },
        tournamentUuids(): string[] {
            return this.tournaments.map((tournament) => tournament.uuid);
        },
        getTournamentByUuid(): (uuid: string) => Tournament | null {
            return (uuid) => {
                return this.tournaments.find((tournament) => tournament.uuid === uuid) ?? null;
            };
        },
        getTeamByUuid(): (uuid: string) => Team | null {
            return (uuid) => {
                return this.teams.find((team) => team.uuid === uuid) ?? null;
            };
        },
        getTournamentName(): (uuid: string) => string {
            return (uuid) => {
                const tournament = this.getTournamentByUuid(uuid);

                return tournament ? tournament.name : '';
            };
        },
        teamsFromLeague(): (uuid: string) => string[] {
            return (uuid) => {
                const tournament = this.getTournamentByUuid(uuid);

                return tournament ? tournament.team_uuids : [];
            };
        },
        getTeamName(): (uuid: string) => string {
            return (uuid) => {
                const team = this.getTeamByUuid(uuid);

                return team ? team.name : '';
            };
        },
        getScoutingTypeTranslation(): (type: ScoutingType) => string {
            return (type) => {
                switch (type) {
                    case ScoutingType.DEFENCE:
                        return 'Defence';
                    case ScoutingType.ATTACK:
                        return 'Attack';
                    case ScoutingType.ATTACK_AND_DEFENCE:
                        return 'Attack and Defence';
                    default:
                        return type;
                }
            };
        },
        getScoutingModeTranslation(): (mode: ScoutingMode) => string {
            return (mode) => {
                switch (mode) {
                    case ScoutingMode.BASIC:
                        return 'Basic (9 actions)';
                    case ScoutingMode.DETAILED:
                        return 'Detailed (15 actions)';
                    default:
                        return mode;
                }
            };
        }
    }
});
