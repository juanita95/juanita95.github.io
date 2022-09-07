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
import { AppState } from 'src/app/ngxr/app.state';
import { authSelectors } from 'src/app/ngxr/auth/auth.selector';
import { BaseComponent } from '../components/base-component/base-component';
import { authActions } from 'src/app/ngxr/auth/auth.actions';
import { LoadingService } from './loading.service';

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
      .select(authSelectors.accessToken)
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
          this.store.dispatch(authActions.accessToken({token: ''}));
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


