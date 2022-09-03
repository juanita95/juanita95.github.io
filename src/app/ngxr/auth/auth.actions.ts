import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/interfaces/auth.interface";

const getToken = createAction(
  '[auth] add token',
  props<{ token: any }>()
);

const accessToken = createAction(
  '[auth] add token',
  props<{ token: any }>()
);

const getUser = createAction(
  '[auth] load user data',
);

const user = createAction(
  '[auth] get user data',
  props<{ user: User }>()
);
  
    
export const authActions = {
  accessToken,
  getToken,
  getUser,
  user
};