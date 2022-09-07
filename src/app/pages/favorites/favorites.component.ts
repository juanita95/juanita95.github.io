import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngxr/app.state';
import { searchSelectors } from 'src/app/ngxr/searcher/search.selector';
import { trackSelectors } from 'src/app/ngxr/track/track.selector';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component';
import { Artist, Track } from 'src/app/shared/interfaces/track.interface';

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
  }

  getTracks(): void {
    this.subSink$.add(
      this.store.select(trackSelectors.getFavorites).subscribe((tracks: Track[]) => {
        this.tracks = tracks;
        this.favoriteTracks = [...this.tracks];
      })
    )
  }

}
