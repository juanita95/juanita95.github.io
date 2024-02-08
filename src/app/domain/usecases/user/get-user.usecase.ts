import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IBaseUseCase } from 'src/app/shared/interfaces/base.interface';
import { IUser } from '../../models/user/user.interface';
import { UserGateway } from '../../models/user/user.gateway';

/**
 * Caso de uso para obtener información del usuario
 * @export
 * @class GetUserUseCase
 * @implements {IBaseUseCase<ITrack>}
 */
@Injectable({ providedIn: 'root' })
export class GetUserUseCase implements IBaseUseCase<IUser> {
  /**
   * Constructor del caso de uso
   * @param {TrackGateway} trackGateway
   * @memberof GetUserUseCase
   */
  constructor(private userGateway: UserGateway) {}

  /**
   * Método que se encarga de invocar el caso de uso para obtener información del usuario
   * @return {*}  {(Observable<IUser>)} Respuesta con la data controlada
   * @memberof GetUserUseCase
   */
  invoke(): Observable<IUser> {
    return this.userGateway.getUser().pipe(
      catchError((error) => throwError(() => error)),
      map((res: IUser) => {
        return res as IUser;
      })
    );
  }
}
