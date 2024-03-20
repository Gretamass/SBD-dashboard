import { TOURNAMENTS_LOGO_MAP } from '@/stores/main/models/constants';

export const useTournamentsInfo = () => {
    function getTournamentLogo(tournamentUuid: string): string {
        return TOURNAMENTS_LOGO_MAP[tournamentUuid];
    }

    return {
        tournaments: {
            getTournamentLogo
        }
    };
};
