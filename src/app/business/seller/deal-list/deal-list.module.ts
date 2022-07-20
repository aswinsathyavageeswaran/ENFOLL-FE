import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealListComponent } from './deal-list.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    DealListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    DealListComponent
  ]
})
export class DealListModule { }
