import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user.interface';

/**
 * Gateway para el manejo del usuario
 * @exports
 * @abstract
 * @class UserGateway
 */
@Injectable({providedIn:'root'})
export abstract class UserGateway {
  /**
   * Permite obtener información del usuario
   * @abstract
   * @return {*}  {(Observable<IUser>)} Respuesta
   * @memberof UserGateway
   */
  abstract getUser(): Observable<IUser>;

}
