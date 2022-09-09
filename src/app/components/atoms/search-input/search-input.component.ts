import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent } from 'rxjs';
import { AppState } from 'src/app/ngxr/app.state';
import { debounceTime, tap } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/components/base-component/base-component';
import { searchActions } from 'src/app/ngxr/searcher/search.actions';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent extends BaseComponent implements OnInit {

  @ViewChild('text') text: ElementRef | any;

  constructor(private store: Store<AppState>) {
    super()
  }

  ngOnInit(): void {
  }
  /**
   * get text by input and dispatch to search action
  */
  getTextInput(): void {
    this.subSink$.add(
      fromEvent(this.text.nativeElement,'keyup')
      .pipe(
          tap(() => {
            const text = this.text.nativeElement.value
            this.store.dispatch(searchActions.getText({text}));
          })
      )
      .subscribe()
    )
  }

}
