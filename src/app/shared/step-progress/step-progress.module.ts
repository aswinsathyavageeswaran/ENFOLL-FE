import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepProgressComponent } from './step-progress.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    StepProgressComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    StepProgressComponent
  ]
})
export class StepProgressModule { }
