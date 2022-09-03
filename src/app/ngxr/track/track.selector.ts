import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { TrackType } from "./track.reducers";

const selectTrackState = (state: AppState) => state.tracks;

const getTracks = createSelector(
  selectTrackState,
  (track: TrackType) => track.getTracks
);

const getFavorites = createSelector(
  selectTrackState,
  (track: TrackType) => track.favorites
);

const isFavorite = createSelector(
  selectTrackState,
  (track: TrackType) => track.isFavorite
);

export const trackSelectors = {
  getTracks,
  getFavorites,
  isFavorite
}