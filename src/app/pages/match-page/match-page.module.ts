import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchPageComponent } from './match-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectCardModule } from '@business/project/project-card/project-card.module';
import { MatchResultModule } from '@business/match/match-result/match-result.module';
import { StepProgressModule } from '@shared/step-progress/step-progress.module';

const routes: Routes = [
  { path: '', component: MatchPageComponent }
];

@NgModule({
  declarations: [
    MatchPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatButtonModule,
    ProjectCardModule,
    MatchResultModule,
    StepProgressModule
  ],
  exports: [
    RouterModule
  ]
})
export class MatchPageModule { }
