import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ITrack } from '../../models/track/track.interface';
import { IBaseUseCase } from 'src/app/shared/interfaces/base.interface';
import { TrackGateway } from '../../models/track/track.gateway';

/**
 * Caso de uso para aprobar lotes
 * @export
 * @class GetTrackUseCase
 * @implements {IBaseUseCase<ITrack>}
 */
@Injectable({providedIn: 'root'})
export class GetTrackUseCase implements IBaseUseCase<ITrack[]> {
  /**
   * Constructor del caso de uso
   * @param {TrackGateway} trackGateway
   * @memberof GetTrackUseCase
   */
  constructor(private trackGateway: TrackGateway) {}

  /**
   * Método que se encarga de invocar el caso de uso para obtener canciones
   * @param {IBatchModel[] } genre genero por el que se van a obtener canciones
   * @return {*}  {(Observable<ITrack> )} Respuesta con la data o error controlado
   * @memberof GetTrackUseCase
   */
  invoke(genre: string): Observable<ITrack[]> {
    return this.trackGateway.getTracks(genre).pipe(
      catchError((error) => throwError(() => error)),
      map((res: ITrack[]) => {
        return res as ITrack[];
      })
    );
  }
}
