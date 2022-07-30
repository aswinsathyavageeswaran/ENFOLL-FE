import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessPageComponent } from './success-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCardModule } from '@business/project/project-card/project-card.module';
import { MatchSelectionModule } from '@business/match/match-selection/match-selection.module';
import { MatCardModule } from '@angular/material/card';
import { MatchService } from '@api/services/match.service';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EstimateCardModule } from '@business/estimate/estimate-card/estimate-card.module';

const routes: Routes = [
  { path: '', component: SuccessPageComponent }
];

@NgModule({
  declarations: [
    SuccessPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProjectCardModule,
    MatCardModule,
    MatchSelectionModule,
    MatButtonModule,
    FlexLayoutModule,
    EstimateCardModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MatchService
  ]
})
export class SuccessPageModule { }
