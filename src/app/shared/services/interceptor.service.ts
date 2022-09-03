import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/ngxr/app.state';
import { authSelectors } from 'src/app/ngxr/auth/auth.selector';

@Injectable()
export class Interceptor implements HttpInterceptor {

  accessToken: string = '';
  constructor(private store: Store<AppState>, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.store
    .select(authSelectors.accessToken)
    .subscribe((token) => (this.accessToken = token));

    const apiReq = request.clone({
      headers: request.headers.set(
        'Authorization',
        `Bearer ${this.accessToken}`
      ),
    });

    return next.handle(apiReq).pipe(
      catchError(this.handleError)
    );
  }

  public handleError(errorEvent: HttpErrorResponse) {
    console.log('[Interceptor Error]:');
    console.log(errorEvent);
    if (errorEvent?.error?.error?.message === 'The access token expired') {
     // this.store.dispatch(authActions.accessToken());
     //  this.router.navigate(['/auth/login']);
    }
    return throwError(()=> errorEvent);
  }
}


