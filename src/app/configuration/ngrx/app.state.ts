import { ActionReducerMap } from "@ngrx/store";
import { searchReducer, SearchType } from "./searcher/search.reducers";
import { tracksReducer, TrackType } from "./track/track.reducers";
import { UserReducer, UserType } from "./user/user.reducer";

export interface AppState {
  tracks: TrackType;
  user: UserType,
  search: SearchType
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  tracks: tracksReducer,
  user: UserReducer,
  search: searchReducer
}