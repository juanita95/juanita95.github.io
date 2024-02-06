import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, finalize, Observable, of, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/configuration/ngrx/app.state';
import { BaseComponent } from '../components/base-component/base-component';
import { LoadingService } from './loading.service';
import { UserActions } from 'src/app/configuration/ngrx/user/user.actions';
import { userSelectors } from 'src/app/configuration/ngrx/user/user.selector';

@Injectable()
export class Interceptor extends BaseComponent implements HttpInterceptor {

  valuesOnCall: number = 0;
  accessToken: string = '';
  
  constructor(
    private store: Store<AppState>, 
    private router: Router,
    public loadingService: LoadingService
    ) {
    super()
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.setLoading(true);
    this.subSink$.add(
      this.store
      .select(userSelectors.accessToken)
      .subscribe((token) => (this.accessToken = token))
    )
 
    const apiReq = request.clone({
      headers: request.headers.set(
        'Authorization',
        `Bearer ${this.accessToken}`
      ),
    });
    this.valuesOnCall++;
    return next.handle(apiReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err?.error?.error?.message === 'The access token expired') {
          this.store.dispatch(UserActions.accessToken({token: ''}));
          this.router.navigate(['/auth/login']);
        }
        return of();
      }),
      finalize(() => {
        this.valuesOnCall--;
        setTimeout(() => {
          if (this.valuesOnCall === 0) {
            this.loadingService.setLoading(false);
          }
        }, 10);
      })
    );
  }

}


