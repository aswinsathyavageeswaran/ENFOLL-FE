import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerFormComponent } from './seller-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SellerFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FlexLayoutModule,
    MatRadioModule,
    RouterModule
  ],
  exports: [
    SellerFormComponent
  ]
})
export class SellerFormModule { }
