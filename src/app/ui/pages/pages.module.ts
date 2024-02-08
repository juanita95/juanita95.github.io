import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { TrackService } from '../../infrastructure/driven-adapter/track/track.service';
import { TrackGateway } from '../../domain/models/track/track.gateway';
import { UserGateway } from '../../domain/models/user/user.gateway';
import { UserService } from '../../infrastructure/driven-adapter/user/user.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalComponent } from './personal/personal.component';
import { playerFactory } from 'src/app/app.module';
import { LottieModule } from 'ngx-lottie';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    FavoritesComponent,
    PersonalComponent
  ],
  imports: [
    ComponentsModule,
    PagesRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    SharedModule,
    LottieModule.forRoot({ player: playerFactory }),
  ], 
  providers: [
    {provide: TrackGateway, useClass: TrackService},
    {provide: UserGateway, useClass: UserService}
  ],
  exports: [
    ComponentsModule,
    HomeComponent,
    FavoritesComponent
  ]
})
export class PagesModule { }
