export interface MainStoreState {
    organizationUuid: string;
    gamePreviews: GamePreview[];
    configuration: {
        actions: Action[];
        outcomes: Outcome[];
        teams: Team[];
        tournaments: Tournament[];
    };
}

export interface GamePreview {
    home_court: boolean;
    opponent_ended_in_shot: number;
    opponent_score: number;
    opponent_team_uuid: string;
    spectating_ended_in_shot: number;
    spectating_score: number;
    spectating_team_uuid: string;
    timestamp: string;
    tournament_uuid: string;
    uuid: string;
}
