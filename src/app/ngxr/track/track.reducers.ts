import { createReducer, on } from "@ngrx/store";
import { trackActions } from "./track.actions";
import { ITrack } from "src/app/domain/models/track/track.interface";

export interface TrackType {
  getTracks: ITrack[];
  favorites: ITrack[];
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
  }))

);
