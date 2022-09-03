import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPagesComponent } from './header-pages/header-pages.component';
import { SidebarListComponent } from './sidebar-list/sidebar-list.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { TrackItemComponent } from './track-item/track-item.component';
import { TrackListComponent } from './track-list/track-list.component';
import { HeaderDataUserComponent } from './header-data-user/header-data-user.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MaterialDesignerModule } from 'src/app/material-designer/material-designer.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HeaderPagesComponent,
    SidebarListComponent,
    SidebarItemComponent,
    TrackItemComponent,
    TrackListComponent,
    HeaderDataUserComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    RouterModule,
    SharedModule,
    MaterialDesignerModule
  ],
  exports: [
    AtomsModule,
    HeaderPagesComponent,
    SidebarListComponent,
    SidebarItemComponent,
    TrackItemComponent,
    TrackListComponent,
    HeaderDataUserComponent
  ]
})
export class MoleculesModule { }
