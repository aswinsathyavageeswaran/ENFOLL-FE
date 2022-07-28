import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanStatusFormComponent } from './loan-status-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    LoanStatusFormComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    LoanStatusFormComponent
  ]
})
export class LoanStatusFormModule { }
