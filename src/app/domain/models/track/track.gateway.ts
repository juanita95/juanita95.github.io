import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrack } from './track.interface';

/**
 * Gateway para el manejo de canciones
 * @exports
 * @abstract
 * @class TrackGateway
 */
@Injectable({providedIn:'root'})
export abstract class TrackGateway {
  /**
   * Permite obtener las canciones
   * @abstract
   * @param {string} genre Filtro para obtener canciones
   * @return {*}  {(Observable<IGetBatches | IBaseErrorModel>)} Respuesta
   * @memberof TrackGateway
   */
  abstract getTracks(genre: string): Observable<ITrack[]>;

}
