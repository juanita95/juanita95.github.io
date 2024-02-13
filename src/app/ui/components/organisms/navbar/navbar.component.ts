import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import {Router } from "@angular/router";
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('drawer') public sidebar: MatDrawer | any;
  public panelOpenState = false;
  public BREAK_POINT_TABLET: number = 768;
  public innerWidth: number = 0;
  options: AnimationOptions = {
    path: 'assets/animations/sound.json',
  };

  constructor(
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  /**
   * close menu if it is opened for < 768px
  */
  onResize(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > this.BREAK_POINT_TABLET) {
      this.sidebar.toggle(false);
    }
  }
  /**
   * open/close sidebar or redirect to home
  */
  clickOnLogo(): void {
    innerWidth < this.BREAK_POINT_TABLET
      ? this.sidebar.toggle()
      : this.router.navigate(['/spotify-app/home'])
  }

}
