import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngxr/app.state';
import { trackActions } from 'src/app/ngxr/track/track.actions';
import { trackSelectors } from 'src/app/ngxr/track/track.selector';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  tracks$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getTracks();
    this.sendFavoriteState();
  }

  getTracks(): void {
    this.tracks$ = this.store.select(trackSelectors.getFavorites);
  }

  sendFavoriteState(): void {
    this.store.dispatch(trackActions.isFavorite({isFavorite: true}));
  }

}
