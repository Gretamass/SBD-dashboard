import { TEAMS_LOGO_MAP } from '@/stores/main/models/constants';

export const useTeamsInfo = () => {
    function getTeamLogo(teamUuid: string): string {
        return TEAMS_LOGO_MAP[teamUuid];
    }

    return {
        teams: {
            getTeamLogo
        }
    };
};
