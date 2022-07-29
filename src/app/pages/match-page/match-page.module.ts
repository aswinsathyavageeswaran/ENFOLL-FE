import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchPageComponent } from './match-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectCardModule } from '@business/project/project-card/project-card.module';
import { MatchResultModule } from '@business/match/match-result/match-result.module';
import { StepProgressModule } from '@shared/step-progress/step-progress.module';
import { MatchService } from '@api/services/match.service';
import { MatCardModule } from '@angular/material/card';

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
    StepProgressModule,
    MatCardModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MatchService
  ]
})
export class MatchPageModule { }
