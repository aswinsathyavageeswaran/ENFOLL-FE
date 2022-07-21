import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectListModule { }
