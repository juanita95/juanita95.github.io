import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

const selectAuthState = (state: AppState) => state.auth;

const accessToken = createSelector(
  selectAuthState,
  (auth) => auth.accessToken
);

const user = createSelector(
  selectAuthState,
  (auth) => auth.user
);

export const authSelectors = {
  accessToken,
  user
};
