import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    ProjectCardComponent
  ]
})
export class ProjectCardModule { }
