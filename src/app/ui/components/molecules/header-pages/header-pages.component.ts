import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/configuration/ngrx/app.state';
import { searchSelectors } from 'src/app/configuration/ngrx/searcher/search.selector';
import { trackSelectors } from 'src/app/configuration/ngrx/track/track.selector';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component';
import { statusClassText } from '../../atoms/interfaces/text-class.interface';

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  styleUrls: ['./header-pages.component.scss']
})
export class HeaderPagesComponent extends BaseComponent implements OnInit {

  @Input() title: string = '';
  textStyle: statusClassText = statusClassText.BIG;

  constructor(private store: Store<AppState>) { 
    super()
  }

  ngOnInit(): void {
  }

}
