import { ActionReducerMap } from "@ngrx/store";
import { authReducer, AuthType } from "./auth/auth.reducer";
import { tracksReducer, TrackType } from "./track/track.reducers";

export interface AppState {
  tracks: TrackType;
  auth: AuthType
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  tracks: tracksReducer,
  auth: authReducer
}