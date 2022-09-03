import { Component, Input, OnInit } from '@angular/core';
import { statusClassText } from '../interfaces/text-class.interface';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() customStyle: statusClassText = statusClassText.DEFAULT;

  constructor() { }

  ngOnInit(): void {
  }

}
