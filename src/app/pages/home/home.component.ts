import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngxr/app.state';
import { trackActions } from 'src/app/ngxr/track/track.actions';
import { trackSelectors } from 'src/app/ngxr/track/track.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tracks$: Observable<any> = new Observable();


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getTracks();
    this.sendFavoriteState();
  }

  getTracks(): void {
    this.store.dispatch(trackActions.loadTracks({genre: 'reggaeton'}));
    this.tracks$ = this.store.select(trackSelectors.getTracks);
  }

  sendFavoriteState(): void {
    this.store.dispatch(trackActions.isFavorite({isFavorite: false}));
  }

}
