import { createAction, props } from "@ngrx/store";

const getText = createAction(
  '[search] load search',
  props<{ text: string }>()
);

const text = createAction(
  '[search] load search',
  props<{ text: string }>()
);
  
export const searchActions = {
  getText,
  text
};
  