import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngxr/app.state';
import { searchSelectors } from 'src/app/ngxr/searcher/search.selector';
import { trackActions } from 'src/app/ngxr/track/track.actions';
import { trackSelectors } from 'src/app/ngxr/track/track.selector';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component';
import { Track } from 'src/app/shared/interfaces/track.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent extends BaseComponent implements OnInit {

  favoriteTracks: Track[] = [];
  tracks: Track[] = [];

  constructor(private store: Store<AppState>) {
    super()
   }

  ngOnInit(): void {
    this.getTracks();
    this.sendFavoriteState();
    this.getText();
  }

  getTracks(): void {
    this.subSink$.add(
      this.store.select(trackSelectors.getFavorites).subscribe((tracks) => {
        this.tracks = tracks;
        this.favoriteTracks = [...this.tracks];
      })
    )
  }

  sendFavoriteState(): void {
    this.store.dispatch(trackActions.isFavorite({isFavorite: true}));
  }

  getText(): void {  
    this.subSink$.add(
      this.store.select(searchSelectors.text).subscribe((text) => {
        this.searchTrack(text);
      }) 
    )
  }

  searchTrack(text: string): void {
    const tracks = this.tracks.filter((track) =>
    track.name.toLowerCase().includes(text.toLowerCase()) ||
    track.artists.find((artist) => artist.name.toLowerCase().includes(text.toLowerCase()))
    );
    this.favoriteTracks = [...tracks];
  }

}
