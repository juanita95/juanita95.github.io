import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomSplitPipe } from './pipes/custom-split.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    CustomSplitPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    CustomSplitPipe,
    SearchPipe
  ]
})
export class SharedModule { }
