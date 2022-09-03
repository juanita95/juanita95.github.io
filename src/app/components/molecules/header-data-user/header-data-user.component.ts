import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/auth.interface';
import { AppState } from 'src/app/ngxr/app.state';
import { authActions } from 'src/app/ngxr/auth/auth.actions';
import { authSelectors } from 'src/app/ngxr/auth/auth.selector';
import { statusClassButton } from '../../atoms/interfaces/button-class.interface';
import { statusClassText } from '../../atoms/interfaces/text-class.interface';

@Component({
  selector: 'app-header-data-user',
  templateUrl: './header-data-user.component.html',
  styleUrls: ['./header-data-user.component.scss']
})
export class HeaderDataUserComponent implements OnInit {

  textStyle: statusClassText = statusClassText.MEDIUM;
  buttonStyle: statusClassButton = statusClassButton.GENERAL;
  colorIcon: string = 'gray';
  user$: Observable<User>= new Observable();

  constructor(
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.getUser();
  }

  redirectToFavs(): void {
    this.router.navigate(['/spoty-app/favorites']);
    this.colorIcon = this.router.url.includes('favorites') 
      ? 'white' : 'gray';
  }

  logOut(): void {
    this.store.dispatch(authActions.accessToken({token: ''}));
    this.router.navigate(['/auth/login']);
  }

  getUser(): void {
    this.store.dispatch(authActions.getUser());
    this.user$ = this.store.select(authSelectors.user);
  }

  getCurrentUrl(): string {
    return this.colorIcon = this.router.url.includes('favorites') 
      ? 'white' : 'gray';
  }

}
