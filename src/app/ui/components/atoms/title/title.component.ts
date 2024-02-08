import { Component, Input, OnInit } from '@angular/core';
import { statusClassText } from '../interfaces/text-class.interface';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() customStyle: statusClassText = statusClassText.DEFAULT;

  constructor() { }

  ngOnInit(): void {
  }

}
