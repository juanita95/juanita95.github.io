import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { SearchType } from "./search.reducers";

const selectSearchState = (state: AppState) => state.search;

const text = createSelector(
  selectSearchState,
  (search: SearchType) => search.text
);

export const searchSelectors = {
  text
}