import type { Action, Outcome, Team, Tournament } from '@/stores/main/models/interfaces';

export interface ApiStoreState {
    backendUrl: string;
}

export interface GamePreviewsResponse {
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

export interface ConfigurationResponse {
    actions: Action[];
    outcomes: Outcome[];
    teams: Team[];
    tournaments: Tournament[];
}
