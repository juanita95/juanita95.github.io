import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

@Injectable()

export abstract class BaseComponent implements OnDestroy {

  protected subSink$: Subscription = new Subscription();

  constructor() { }

  ngOnDestroy(): void {
    this.subSink$.unsubscribe();
  }

}
