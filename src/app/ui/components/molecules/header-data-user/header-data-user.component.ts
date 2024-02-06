import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/configuration/ngxr/app.state';
import { statusClassButton } from '../../atoms/interfaces/button-class.interface';
import { statusClassText } from '../../atoms/interfaces/text-class.interface';
import { IUser } from 'src/app/domain/models/user/user.interface';
import { UserActions } from 'src/app/configuration/ngxr/user/user.actions';
import { userSelectors } from 'src/app/configuration/ngxr/user/user.selector';

@Component({
  selector: 'app-header-data-user',
  templateUrl: './header-data-user.component.html',
  styleUrls: ['./header-data-user.component.scss']
})
export class HeaderDataUserComponent implements OnInit {

  textStyle: statusClassText = statusClassText.MEDIUM;
  buttonStyle: statusClassButton = statusClassButton.GENERAL;
  colorIcon: string = 'gray';
  user$: Observable<IUser>= new Observable();

  constructor(
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.getUser();
  }

  redirectToFav(): void {
    this.router.navigate(['/spotify-app/favorites']);
    this.colorIcon = this.router.url.includes('favorites') 
      ? 'white' : 'gray';
  }

  redirectToPersonal(): void {
    this.router.navigate(['/spotify-app/personal']);
  }

  logOut(): void {
    this.store.dispatch(UserActions.accessToken({token: ''}));
    this.router.navigate(['/auth/login']);
  }

  getUser(): void {
    this.store.dispatch(UserActions.getUser());
    this.user$ = this.store.select(userSelectors.user);
  }

  getCurrentUrl(): string {
    return this.colorIcon = this.router.url.includes('favorites') 
      ? 'white' : 'gray';
  }

}
