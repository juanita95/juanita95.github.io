import { createReducer, on } from "@ngrx/store";
import { Track } from "src/app/shared/interfaces/track.interface";
import { trackActions } from "./track.actions";

export interface TrackType {
  getTracks: Track[];
  favorites: Track[];
  isFavorite: boolean;
}

export const initialState: TrackType = {
  getTracks: [],
  favorites: [],
  isFavorite: false,
}

export const tracksReducer = createReducer(
  initialState,
  on(trackActions.tracks, (state, action) => ({
    ...state,
    getTracks: action.tracks,
  })),
  on(trackActions.favorites, (state, action) => ({
    ...state,
    favorites: action.tracks,
  })),
  on(trackActions.isFavorite, (state, action) => ({
    ...state,
    isFavorite: action.isFavorite,
  }))

);
