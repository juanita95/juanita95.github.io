import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/domain/models/user/user.interface";

const getToken = createAction(
  '[auth] add token',
  props<{ token: string }>()
);

const accessToken = createAction(
  '[auth] add token',
  props<{ token: string }>()
);

const getUser = createAction(
  '[auth] load user data',
);

const user = createAction(
  '[auth] get user data',
  props<{ user: IUser }>()
);
  
    
export const UserActions = {
  accessToken,
  getToken,
  getUser,
  user
};