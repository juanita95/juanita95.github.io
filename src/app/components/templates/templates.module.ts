import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../organisms/organisms.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule
  ], 
  exports: [
    OrganismsModule,
    LayoutComponent
  ]
})
export class TemplatesModule { }
