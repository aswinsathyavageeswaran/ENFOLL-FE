import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyPageComponent } from './buy-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ProjectListModule } from '@business/project/project-list/project-list.module';
import { ProjectFormModule } from '@business/project/project-form/project-form.module';

const routes: Routes = [
  { path: '', component: BuyPageComponent }
]

@NgModule({
  declarations: [
    BuyPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatCardModule,
    ProjectListModule,
    ProjectFormModule
  ],
  exports: [
    RouterModule
  ]
})
export class BuyPageModule { }
