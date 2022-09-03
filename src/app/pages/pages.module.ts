import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    FavoritesComponent
  ],
  imports: [
    ComponentsModule,
    PagesRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ], 
  exports: [
    ComponentsModule,
    HomeComponent,
    FavoritesComponent
  ]
})
export class PagesModule { }
