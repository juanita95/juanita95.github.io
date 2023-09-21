import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngxr/app.state';
import { trackActions } from 'src/app/ngxr/track/track.actions';
import { trackSelectors } from 'src/app/ngxr/track/track.selector';
import { statusClassText } from '../../atoms/interfaces/text-class.interface';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component';
import { ITrack } from 'src/app/domain/models/track/track.interface';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent extends BaseComponent implements OnInit {

  @Input() track: ITrack = new ITrack();
  favoriteTracks: ITrack[] = [];
  textStyle: statusClassText = statusClassText.SMALL_WHITE;

  constructor(private store: Store<AppState>) { 
    super()
  }

  ngOnInit(): void {
    this.getFavoritesTracks();
  }

  getNameArtist() {
    if (!this.track) return '';
    return this.track.artists.map((artist: any) => artist.name).join(', ') ?? '';
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

  addTrackToFavorite(addTrack: ITrack): void {
    this.favoriteTracks = this.favoriteTracks.concat(addTrack);
    this.store.dispatch(trackActions.updateFavorites({tracks: this.favoriteTracks}));
  }

  removeTrackToFavorite(removeTrack: ITrack): void {
    this.favoriteTracks = this.favoriteTracks.filter(track => track.id !== removeTrack.id);
    this.store.dispatch(trackActions.updateFavorites({tracks: this.favoriteTracks}));
  }
}
