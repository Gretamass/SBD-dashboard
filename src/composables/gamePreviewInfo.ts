import { computed } from 'vue';
import type { GamePreview } from '@/stores/main/models/interfaces';
import { useMainStore } from '@/stores/main/mainStore';
import { DateTime } from 'luxon';

export const useGamePreviewInfo = (gameData: GamePreview) => {
    const uuid = computed<string>(() => {
        return gameData.uuid;
    });

    const isHomeCourt = computed<string>(() => {
        return gameData.home_court;
    });

    const homeTeamUuid = computed<string>(() => {
        return isHomeCourt.value ? gameData.spectating_team_uuid : gameData.opponent_team_uuid;
    });

    const awayTeamUuid = computed<string>(() => {
        return isHomeCourt.value ? gameData.opponent_team_uuid : gameData.spectating_team_uuid;
    });

    const homeTeamName = computed<string>(() => {
        return getTeamName(homeTeamUuid.value);
    });

    const awayTeamName = computed<string>(() => {
        return getTeamName(awayTeamUuid.value);
    });

    const homeTeamScore = computed<number>(() => {
        return isHomeCourt.value ? gameData.spectating_score : gameData.opponent_score;
    });

    const awayTeamScore = computed<number>(() => {
        return isHomeCourt.value ? gameData.opponent_score : gameData.spectating_score;
    });

    const tournamentUuid = computed<string>(() => {
        return gameData.tournament_uuid;
    });

    const tournamentName = computed<string>(() => {
        return getTournamentName(tournamentUuid.value);
    });

    const date = computed<DateTime>(() => {
        return DateTime.fromISO(gameData.timestamp);
    });

    const dateMonthDay = computed<string>(() => {
        const month = date.value.monthShort;
        const day = date.value.day;

        return `${month} ${day}`;
    });

    const dateYear = computed<string>(() => {
        return date.value.year;
    });

    function getTeamName(teamUuid: string): string {
        const { configuration } = useMainStore();

        const team = configuration.teams.find((team) => team.uuid === teamUuid) ?? null;

        return team ? team.name : '-';
    }

    function getTournamentName(tournamentUuid: string): string {
        const { configuration } = useMainStore();

        const tournament =
            configuration.tournaments.find((tournament) => tournament.uuid === tournamentUuid) ??
            null;

        return tournament ? tournament.name : '-';
    }

    const game = computed<GamePreviewInfo>(() => {
        return {
            uuid: uuid.value,
            isHomeCourt: isHomeCourt.value,
            homeTeam: {
                name: homeTeamName.value,
                uuid: homeTeamUuid.value,
                score: homeTeamScore.value
            },
            awayTeam: {
                name: awayTeamName.value,
                uuid: awayTeamUuid.value,
                score: awayTeamScore.value
            },
            tournament: {
                name: tournamentName.value,
                uuid: tournamentUuid.value
            },
            date: {
                monthDay: dateMonthDay.value,
                year: dateYear.value
            }
        };
    });

    return { game };
};
