import { createReducer, on } from "@ngrx/store";
import { IUser } from "src/app/domain/models/user/user.interface";
import { UserActions } from "./user.actions";

export interface UserType {
  accessToken: string;
  user: IUser;
}

export const initialState: UserType = {
  accessToken: '',
  user: new IUser(),
};

export const UserReducer = createReducer(
  initialState,
  on(UserActions.user, (state, action) => ({
		...state,
    user: action.user,
  })),
  on(UserActions.accessToken, (state, action) => ({
		...state,
    accessToken: action.token,
  })),
);