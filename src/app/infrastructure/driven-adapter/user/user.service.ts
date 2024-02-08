import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/user/user.gateway';
import { IUser } from 'src/app/domain/models/user/user.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Constructor de UserService.
 * @constructor
 * @param {HttpClient} http - Cliente HTTP para realizar peticiones.
 * @memberof TrackService
 */
export class UserService implements UserGateway {
  constructor(private http: HttpClient) {}
  /**
   * Obtiene información del usuario.
   * @returns {Observable<IUser> } - Respuesta de la petición.
   * @memberof BatchService
   */
  getUser(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.spotify_api}/me`);
  }
}
