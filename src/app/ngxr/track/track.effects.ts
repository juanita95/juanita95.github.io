import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {Actions, createEffect, ofType } from '@ngrx/effects'
import { trackActions } from './track.actions';
import { TrackService } from 'src/app/pages/services/track-services/track.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class TrackEffect {
  constructor(
    private actions$: Actions,
    private trackService: TrackService
  ) {}

  loadTracks$ = createEffect(() => this.actions$.pipe(
    ofType(trackActions.loadTracks),
    mergeMap((action) => this.trackService.getTracks(action.genre)
      .pipe(
        map(tracks => trackActions.tracks({tracks})),
                catchError(() => EMPTY)
        ))
  )
);

}
