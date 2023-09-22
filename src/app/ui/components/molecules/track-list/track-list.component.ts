import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITrack } from 'src/app/domain/models/track/track.interface';
import { AppState } from 'src/app/configuration/ngxr/app.state';
import { searchSelectors } from 'src/app/configuration/ngxr/searcher/search.selector';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent extends BaseComponent implements OnInit {

  @Input() tracks: ITrack[] = [];
  textFilter: string = '';

  constructor(private store: Store<AppState>) { 
    super()
  }

  ngOnInit(): void {
    this.getTextBySearch();
  }

  getTextBySearch(): void {  
    this.subSink$.add(
      this.store.select(searchSelectors.text).subscribe((text: string) => {
        this.textFilter = text;
      }) 
    )
  }

}
