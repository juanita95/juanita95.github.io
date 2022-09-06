import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomSplitPipe } from './pipes/custom-split.pipe';

@NgModule({
  declarations: [
    CustomSplitPipe,
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    CustomSplitPipe,
    
  ]
})
export class SharedModule { }
