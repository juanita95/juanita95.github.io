import { createAction, props } from "@ngrx/store";
import { ITrack } from "src/app/domain/models/track/track.interface";

const loadTracks = createAction(
  '[tracks] load tracks',
  props<{ genre: string }>()
);

const updateFavorites = createAction(
  '[Tracks] Add Favorite',
  props<{ tracks: ITrack[] }>()
);

const favorites = createAction(
  '[Tracks] Add Favorite',
  props<{ tracks: ITrack[] }>()
);

const tracks = createAction(
  '[Tracks] Get Tracks Success',
  props<{ tracks: ITrack[] }>()
);
  
export const trackActions = {
  favorites,
  updateFavorites,
  loadTracks,
  tracks
};
  