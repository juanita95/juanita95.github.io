import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/core/interfaces/auth.interface";
import { authActions } from "./auth.actions";

export interface AuthType {
  accessToken: string;
  user: User
}

export const initialState: AuthType = {
  accessToken: '',
  user: new User(),
};

export const authReducer = createReducer(
  initialState,
  on(authActions.user, (state, action) => ({
		...state,
    user: action.user,
  })),
  on(authActions.accessToken, (state, action) => ({
		...state,
    accessToken: action.token,
  })),
);