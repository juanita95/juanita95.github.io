import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { statusClassText } from 'src/app/components/atoms/interfaces/text-class.interface';
import { AppState } from 'src/app/ngxr/app.state';
import { UserActions } from 'src/app/ngxr/user/user.actions';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  textTitle: statusClassText = statusClassText.SMALL_BLACK;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getAccessToken();
  }
  /**
   * get token
  */
  getAccessToken(): void {
    if (!this.route.snapshot.fragment) return;
    const token = this.route.snapshot.fragment
      ?.split('=')[1]
      .split('&')[0];
    this.store.dispatch(UserActions.getToken({token}));
    this.router.navigate(['/spoty-app/home']);
  }

}
