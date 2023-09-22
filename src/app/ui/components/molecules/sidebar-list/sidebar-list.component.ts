import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/sidebar-list.interface';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent implements OnInit {

  menuItems: MenuItem[] = 
  [
    {
      icon: '/assets/svg/home.svg',
      router: '/spoty-app/home',
      title: 'Home'
    },
    {
      icon: '/assets/svg/fav.svg',
      router: '/spoty-app/favorites',
      title: 'Favorites'
    },
    {
      icon: '/assets/svg/logout.svg',
      router: '/spoty-app/favorites',
      title: 'Log out'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
