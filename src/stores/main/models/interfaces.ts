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

export interface Action {
    uuid: string;
    name: string;
    options: Option[];
    expert: boolean;
}

export interface Option {
    uuid: string;
    name: string;
    organization_uuid: string;
}

export interface Outcome {
    uuid: string;
    name: string;
    points: number;
    ended_in_shot: boolean;
    possible_free_throws: number;
}

export interface Team {
    uuid: string;
    name: string;
}

export interface Tournament {
    uuid: string;
    name: string;
    team_uuids: string[];
}
