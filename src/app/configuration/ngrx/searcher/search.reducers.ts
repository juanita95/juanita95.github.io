import { createReducer, on } from "@ngrx/store";
import { searchActions } from "./search.actions";

export interface SearchType {
  text: string;
}

export const initialState: SearchType = {
  text: ''
}

export const searchReducer = createReducer(
  initialState,
  on(searchActions.text, (state, action) => ({
    ...state,
    text: action.text,
  })),

);
