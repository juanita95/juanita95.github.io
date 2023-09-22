import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITrack } from 'src/app/domain/models/track/track.interface';
import { AppState } from 'src/app/configuration/ngxr/app.state';
import { trackActions } from 'src/app/configuration/ngxr/track/track.actions';
import { trackSelectors } from 'src/app/configuration/ngxr/track/track.selector';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

  recommendedTrack: ITrack[] = [];
  tracks: ITrack[] = [];

  constructor(private store: Store<AppState>) { 
    super()
  }

  ngOnInit(): void {
    this.getTracks();
  }

  getTracks(): void {
    this.store.dispatch(trackActions.loadTracks({genre: 'pop'}));
    
    this.subSink$.add(
      this.store.select(trackSelectors.getTracks).subscribe((tracks: ITrack[]) => {
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
