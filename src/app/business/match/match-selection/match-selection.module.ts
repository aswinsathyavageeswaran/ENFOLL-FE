import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchSelectionComponent } from './match-selection.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    MatchSelectionComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    MatchSelectionComponent
  ]
})
export class MatchSelectionModule { }
