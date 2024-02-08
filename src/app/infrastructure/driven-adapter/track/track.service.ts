import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackGateway } from 'src/app/domain/models/track/track.gateway';
import { ITrack } from 'src/app/domain/models/track/track.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
/**
 * Constructor de TrackService.
 * @constructor
 * @param {HttpClient} http - Cliente HTTP para realizar peticiones.
 * @memberof TrackService
 */
export class TrackService implements TrackGateway {
  constructor(private http: HttpClient) {}
  /**
   * Obtiene las canciones.
   * @param {IFilterQuery} batchFilter - Filtra para obtener lotes
   * @returns {Observable<IRequestModel | IBaseErrorModel>} - Respuesta de la petición.
   * @memberof BatchService
   */
  public getTracks(genre: string): Observable<ITrack[]> {
    return this.http.get<ITrack[]>(
      `${environment.spotify_api}/recommendations?seed_genres=${genre}`
    );
  }
}
