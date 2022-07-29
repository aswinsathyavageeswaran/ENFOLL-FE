import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchResultComponent } from './match-result.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    MatchResultComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    MatchResultComponent,
  ]
})
export class MatchResultModule { }
