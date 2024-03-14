export interface ApiStoreState {
    backendUrl: string;
}

export interface GamePreviewsResponse {}

export interface ConfigurationResponse {
    actions: Action[];
    outcomes: Outcome[];
    teams: Team[];
    tournaments: Tournament[];
}
