import { createAction, props } from "@ngrx/store";
import { Track } from "src/app/shared/interfaces/track.interface";

const loadTracks = createAction(
  '[tracks] load tracks',
  props<{ genre: string }>()
);

const updateFavorites = createAction(
  '[Tracks] Add Favorite',
  props<{ tracks: Track[] }>()
);

const favorites = createAction(
  '[Tracks] Add Favorite',
  props<{ tracks: Track[] }>()
);

const tracks = createAction(
  '[Tracks] Get Tracks Success',
  props<{ tracks: Track[] }>()
);
  
export const trackActions = {
  favorites,
  updateFavorites,
  loadTracks,
  tracks
};
  