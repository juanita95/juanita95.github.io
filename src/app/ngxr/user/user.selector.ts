import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

const selectUserState = (state: AppState) => state.user;

const accessToken = createSelector(
  selectUserState,
  (user) => user.accessToken
);

const user = createSelector(
  selectUserState,
  (user) => user.user
);

export const userSelectors = {
  accessToken,
  user
};
