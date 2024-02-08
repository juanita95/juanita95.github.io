import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../ui/components/components.module';
import { TokenComponent } from './token/token.component';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { LottieModule } from 'ngx-lottie';
import { playerFactory } from '../app.module';

@NgModule({
  declarations: [LoginComponent, TokenComponent, CoreComponent],
  imports: [
    RouterModule,
    ComponentsModule,
    CommonModule,
    CoreRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
})
export class CoreModule {}
