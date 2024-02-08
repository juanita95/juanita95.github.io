import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignerModule } from 'src/app/shared/material-designer/material-designer.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LottieModule } from 'ngx-lottie';
import { playerFactory } from 'src/app/app.module';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    MaterialDesignerModule,
    LottieModule.forRoot({ player: playerFactory }),
  ], 
  exports: [
    MoleculesModule,
    NavbarComponent
  ]
})
export class OrganismsModule { }
