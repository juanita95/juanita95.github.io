import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/configuration/ngrx/app.state';
import { UserActions } from 'src/app/configuration/ngrx/user/user.actions';
import { userSelectors } from 'src/app/configuration/ngrx/user/user.selector';
import { IUser } from 'src/app/domain/models/user/user.interface';
import { statusClassText } from '../../components/atoms/interfaces/text-class.interface';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  user$: Observable<IUser>= new Observable();
  textStyle: statusClassText = statusClassText.MEDIUM;
  options: AnimationOptions = {
    path: '/assets/animations/girl.json',
  };

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.store.dispatch(UserActions.getUser());
    this.user$ = this.store.select(userSelectors.user);
    this.store.select(userSelectors.user).subscribe((data) => {
      console.log(data);
      
    })    
  }
}
