import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimateFormComponent } from './estimate-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    EstimateFormComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    EstimateFormComponent
  ]
})
export class EstimateFormModule { }
