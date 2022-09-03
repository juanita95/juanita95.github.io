import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngxr/app.state';
import { authSelectors } from 'src/app/ngxr/auth/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router, 
    private store: Store<AppState>
    ) {}

  canActivate(){
    let canAuth: boolean = false;
    this.store
    .select(authSelectors.accessToken)
    .subscribe((token) => {
      canAuth = token  === '';
    })
    if (canAuth) this.router.navigate(['/login']);
    return !canAuth;
  }
}
