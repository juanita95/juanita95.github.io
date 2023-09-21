import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITrack } from 'src/app/domain/models/track/track.interface';
import { AppState } from 'src/app/ngxr/app.state';
import { trackSelectors } from 'src/app/ngxr/track/track.selector';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent extends BaseComponent implements OnInit {

  favoriteTracks: ITrack[] = [];
  tracks: ITrack[] = [];

  constructor(private store: Store<AppState>) {
    super()
   }

  ngOnInit(): void {
    this.getTracks();
  }

  getTracks(): void {
    this.subSink$.add(
      this.store.select(trackSelectors.getFavorites).subscribe((tracks: ITrack[]) => {
        this.tracks = tracks;
        this.favoriteTracks = [...this.tracks];
      })
    )
  }

}
