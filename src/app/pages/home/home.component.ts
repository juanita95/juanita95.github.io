import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngxr/app.state';
import { searchSelectors } from 'src/app/ngxr/searcher/search.selector';
import { trackActions } from 'src/app/ngxr/track/track.actions';
import { trackSelectors } from 'src/app/ngxr/track/track.selector';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component';
import { Track } from 'src/app/shared/interfaces/track.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

  recommendedTrack: Track[] = [];
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
    this.store.dispatch(trackActions.loadTracks({genre: 'reggaeton'}));
    this.store.select(trackSelectors.getTracks).subscribe((tracks: any) => {
      this.tracks = tracks.tracks;
      this.recommendedTrack = [...this.tracks];
    });
  }

  sendFavoriteState(): void {
    this.store.dispatch(trackActions.isFavorite({isFavorite: false}));
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
    this.recommendedTrack = [...tracks];
  }

}
