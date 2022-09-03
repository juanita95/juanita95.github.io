import { Component, Input, OnInit } from '@angular/core';
import { statusClassText } from '../../atoms/interfaces/text-class.interface';

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  styleUrls: ['./header-pages.component.scss']
})
export class HeaderPagesComponent implements OnInit {

  @Input() title: string = '';
  textStyle: statusClassText = statusClassText.BIG;

  constructor() { }

  ngOnInit(): void {
  }

}
