import { Component, OnInit, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent implements OnInit {
  @Input() url: string = '';
  canShowNoteAnimation: boolean = false;
  options: AnimationOptions = {
    path: '/assets/animations/note.json',
  };

  constructor() {}

  ngOnInit(): void {}

  onPlay(): void {
    this.canShowNoteAnimation = true;
  }

  onPause(): void {
    this.canShowNoteAnimation = false;
  }
}
