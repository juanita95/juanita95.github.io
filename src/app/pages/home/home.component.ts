import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngxr/app.state';
import { searchSelectors } from 'src/app/ngxr/searcher/search.selector';
import { trackActions } from 'src/app/ngxr/track/track.actions';
import { trackSelectors } from 'src/app/ngxr/track/track.selector';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component';
import { Artist, Track } from 'src/app/shared/interfaces/track.interface';

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
  }

  getTracks(): void {
    this.store.dispatch(trackActions.loadTracks({genre: 'reggaeton'}));
    this.subSink$.add(
      this.store.select(trackSelectors.getTracks).subscribe((tracks: Track[]) => {
        this.tracks = tracks;
        if (!this.tracks)return;
        this.recommendedTrack = this.tracks;
        this.recommendedTrack = this.recommendedTrack.map((track) => (
          {...track, isFavorite:false }
        ))
      })
    )
  }

}
