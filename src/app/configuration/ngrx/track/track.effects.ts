import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { trackActions } from './track.actions';
import { EMPTY } from 'rxjs';
import { GetTrackUseCase } from 'src/app/domain/usecases/track/get-track.usecase';

@Injectable()
export class TrackEffect {
  constructor(
    private actions$: Actions,
    private getTrackUseCase: GetTrackUseCase
  ) {}

  loadTracks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(trackActions.loadTracks),
      mergeMap((action) =>
        this.getTrackUseCase.invoke(action.genre).pipe(
          map((tracks: any) => trackActions.tracks({ tracks: tracks.tracks })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
