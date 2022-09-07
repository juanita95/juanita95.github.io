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

  @Input() track: Track = new Track();
  favoriteTracks: Track[] = [];
  textStyle: statusClassText = statusClassText.SMALL_WHITE;

  constructor(private store: Store<AppState>) { 
    super()
  }

  ngOnInit(): void {
    this.getFavoritesTracks();
  }

  getNameArtist() {
    if (!this.track) return '';
    return this.track.artists.map((artist) => artist.name).join(', ') ?? '';
  }

  addColorIcon(): string {
    const track = this.favoriteTracks.find((track) => track.id === this.track.id);
    if (track && this.track.id === track!.id) this.track.isFavorite = true
    return this.track.isFavorite 
      ? 'white' : 'gray';
  }

  addRemoveFavorites(): void {
    this.track.isFavorite = !this.track.isFavorite;
    this.track.isFavorite ? this.addTrackToFavorite(this.track) : this.removeTrackToFavorite(this.track);

  }

  getFavoritesTracks(): void {
    this.subSink$.add(
      this.store.select(trackSelectors.getFavorites).subscribe((tracks) => {
        this.favoriteTracks = tracks;
      })
    )
  }

  addTrackToFavorite(addTrack: Track): void {
    this.favoriteTracks = this.favoriteTracks.concat(addTrack);
    this.store.dispatch(trackActions.updateFavorites({tracks: this.favoriteTracks}));
  }

  removeTrackToFavorite(removeTrack: Track): void {
    this.favoriteTracks = this.favoriteTracks.filter(track => track.id !== removeTrack.id);
    this.store.dispatch(trackActions.updateFavorites({tracks: this.favoriteTracks}));
  }
}
