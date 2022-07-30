import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanPageComponent } from './loan-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCardModule } from '@business/project/project-card/project-card.module';
import { StepProgressModule } from '@shared/step-progress/step-progress.module';
import { MatCardModule } from '@angular/material/card';
import { LoanStatusFormModule } from '@business/loan/loan-status-form/loan-status-form.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', component: LoanPageComponent }
]

@NgModule({
  declarations: [
    LoanPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    StepProgressModule,
    ProjectCardModule,
    MatCardModule,
    LoanStatusFormModule,
    MatButtonModule
  ],
  exports: [
    LoanPageComponent
  ]
})
export class LoanPageModule { }
