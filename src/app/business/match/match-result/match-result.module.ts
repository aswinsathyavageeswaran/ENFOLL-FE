import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchResultComponent } from './match-result.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    MatchResultComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    MatchResultComponent
  ]
})
export class MatchResultModule { }
