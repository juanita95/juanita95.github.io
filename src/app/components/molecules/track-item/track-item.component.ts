import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngxr/app.state';
import { trackActions } from 'src/app/ngxr/track/track.actions';
import { trackSelectors } from 'src/app/ngxr/track/track.selector';
import { Track } from 'src/app/shared/interfaces/track.interface';
import { statusClassText } from '../../atoms/interfaces/text-class.interface';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent implements OnInit {

  @Input() track?: Track;
  isFavorite: boolean = false;
  colorIcon: string = 'gray';
  tracks: Track[] = [];
  textStyle: statusClassText = statusClassText.SMALL_WHITE;

  constructor(private store: Store<AppState>) { }

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
    this.store.select(trackSelectors.isFavorite).subscribe((isFavorite) => {
      this.isFavorite = isFavorite;
    });
  }

  getFavoritesTracks(): void {
    this.store.select(trackSelectors.getFavorites).subscribe((tracks) => {
      this.tracks = tracks;
    });
  }

  addTrackToFavorite(track: Track): void {
    this.tracks = this.tracks.concat(track);
    this.store.dispatch(trackActions.updatefavorites({tracks: this.tracks}));
  }

  removeTrackToFavorite(removeTrack: Track): void {
    this.tracks = this.tracks.filter(track => track.id !== removeTrack.id);
    this.store.dispatch(trackActions.updatefavorites({tracks: this.tracks}));
  }

}
