import { createAction, props } from "@ngrx/store";
import { Track } from "src/app/shared/interfaces/track.interface";

const loadTracks = createAction(
  '[tracks] load tracks',
  props<{ genre: string }>()
);

const updatefavorites = createAction(
  '[Tracks] Add Favorite',
  props<{ tracks: Track[] }>()
);

const isFavorite = createAction(
  '[Tracks] is Favorite',
  props<{ isFavorite: boolean }>()
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
  updatefavorites,
  isFavorite,
  loadTracks,
  tracks
};
  