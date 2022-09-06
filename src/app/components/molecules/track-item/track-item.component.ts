import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngxr/app.state';
import { trackActions } from 'src/app/ngxr/track/track.actions';
import { trackSelectors } from 'src/app/ngxr/track/track.selector';
import { Track } from 'src/app/shared/interfaces/track.interface';
import { statusClassText } from '../../atoms/interfaces/text-class.interface';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent extends BaseComponent implements OnInit {

  @Input() track?: Track;
  isFavorite: boolean = false;
  colorIcon: string = 'gray';
  favoriteTracks: Track[] = [];
  textStyle: statusClassText = statusClassText.SMALL_WHITE;

  constructor(private store: Store<AppState>) { 
    super()
  }

  ngOnInit(): void {
    this.getFavoritesTracks();
    this.getFavoriteState();
  }

  getNameArtist() {
    if (!this.track) return '';
    return this.track.artists.map((artist) => artist.name).join(', ') ?? '';
  }

  addColorIcon(): string {
    return this.colorIcon = this.isFavorite 
      ? 'white' : 'gray';
  }

  addRemoveFavorites(track: Track): void {
    this.isFavorite = !this.isFavorite;
    this.isFavorite ? this.addTrackToFavorite(track) : this.removeTrackToFavorite(track);

  }

  getFavoriteState(): void {
    this.subSink$.add(
      this.store.select(trackSelectors.isFavorite).subscribe((isFavorite) => {
        this.isFavorite = isFavorite;
      })
    )
  }

  getFavoritesTracks(): void {
    this.subSink$.add(
      this.store.select(trackSelectors.getFavorites).subscribe((tracks) => {
        this.favoriteTracks = tracks;
      })
    )
  }

  addTrackToFavorite(track: Track): void {
    this.favoriteTracks = this.favoriteTracks.concat(track);
    this.store.dispatch(trackActions.updateFavorites({tracks: this.favoriteTracks}));
  }

  removeTrackToFavorite(removeTrack: Track): void {
    this.favoriteTracks = this.favoriteTracks.filter(track => track.id !== removeTrack.id);
    this.store.dispatch(trackActions.updateFavorites({tracks: this.favoriteTracks}));
  }
}
