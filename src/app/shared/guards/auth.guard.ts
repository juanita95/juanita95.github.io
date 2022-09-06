import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngxr/app.state';
import { authSelectors } from 'src/app/ngxr/auth/auth.selector';
import { BaseComponent } from '../components/base-component/base-component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard extends BaseComponent implements CanActivate {

  constructor(
    private router: Router, 
    private store: Store<AppState>
    ) {
      super()
    }

  canActivate(){
    let canAuth: boolean = false;
    this.subSink$.add(
      this.store
      .select(authSelectors.accessToken)
      .subscribe((token) => {
        canAuth = token  === '';
      })
    )
    if (canAuth) this.router.navigate(['/login']);
    return !canAuth;
  }
}
