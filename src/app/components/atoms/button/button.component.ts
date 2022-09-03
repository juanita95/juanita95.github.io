import { Component, Input, OnInit } from '@angular/core';
import { statusClassButton } from '../interfaces/button-class.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() customStyle: statusClassButton = statusClassButton.DEFAULT;

  constructor() { }

  ngOnInit(): void {
  }

}
