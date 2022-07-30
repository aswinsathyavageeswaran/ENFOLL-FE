import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimateCardComponent } from './estimate-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    EstimateCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    EstimateCardComponent
  ]
})
export class EstimateCardModule { }
