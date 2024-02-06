import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { GetUserUseCase } from 'src/app/domain/usecases/user/get-user.usecase';
import { UserActions } from './user.actions';

@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private getUserUseCase: GetUserUseCase
  ) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUser),
      mergeMap(() =>
        this.getUserUseCase
          .invoke()
          .pipe(map((user) => UserActions.user({ user })))
      )
    )
  );
}
