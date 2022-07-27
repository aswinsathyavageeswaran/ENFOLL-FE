import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimatePageComponent } from './estimate-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCardModule } from '@business/project/project-card/project-card.module';
import { StepProgressModule } from '@shared/step-progress/step-progress.module';
import { EstimateFormModule } from '@business/estimate/estimate-form/estimate-form.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: '', component: EstimatePageComponent }
];

@NgModule({
  declarations: [
    EstimatePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatCardModule,
    ProjectCardModule,
    StepProgressModule,
    EstimateFormModule
  ],
  exports: [
    RouterModule
  ]
})
export class EstimatePageModule { }
