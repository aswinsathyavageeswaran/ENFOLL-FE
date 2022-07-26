import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimatePageComponent } from './estimate-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCardModule } from '@business/project/project-card/project-card.module';
import { StepProgressModule } from '@shared/step-progress/step-progress.module';
import { EstimateFormModule } from '@business/estimate/estimate-form/estimate-form.module';

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
    ProjectCardModule,
    StepProgressModule,
    EstimateFormModule
  ],
  exports: [
    RouterModule
  ]
})
export class EstimatePageModule { }
