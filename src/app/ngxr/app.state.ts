import { ActionReducerMap } from "@ngrx/store";
import { authReducer, AuthType } from "./auth/auth.reducer";
import { searchReducer, SearchType } from "./searcher/search.reducers";
import { tracksReducer, TrackType } from "./track/track.reducers";

export interface AppState {
  tracks: TrackType;
  auth: AuthType,
  search: SearchType
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  tracks: tracksReducer,
  auth: authReducer,
  search: searchReducer
}