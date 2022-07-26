import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimateFormComponent } from './estimate-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    EstimateFormComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [
    EstimateFormComponent
  ]
})
export class EstimateFormModule { }
