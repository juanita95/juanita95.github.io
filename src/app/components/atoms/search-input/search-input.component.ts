import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Input() form!: FormGroup<{
    query: FormControl<string | null>;
  }>;

  @Output('onSubmit') onSubmitEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

}
