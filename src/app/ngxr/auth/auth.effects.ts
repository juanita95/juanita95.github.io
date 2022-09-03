import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects'
import {  map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { authActions } from './auth.actions';

@Injectable()
export class AuthEffect {
  constructor(
		private actions$: Actions,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.getUser),
    mergeMap(() => this.authService.getUser()
      .pipe(
        map(user => authActions.user({user})),
        ))
  )
);

  loadToken$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.getToken),
    tap((action) => authActions.accessToken({token: document.cookie})
     )
  ), {
    dispatch: false,
  }
);


}