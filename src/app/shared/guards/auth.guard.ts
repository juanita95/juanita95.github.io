import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/configuration/ngxr/app.state';
import { BaseComponent } from '../components/base-component/base-component';
import { userSelectors } from 'src/app/configuration/ngxr/user/user.selector';

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

  canActivate(): boolean{
    let canAuth: boolean = false;
    this.subSink$.add(
      this.store
      .select(userSelectors.accessToken)
      .subscribe((token) => {
        console.log(token);
        
        canAuth = token  === '';
      })
    )
    if (canAuth) this.router.navigate(['/login']);
    return !canAuth;
  }
}
