import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoundProgressModule } from "angular-svg-round-progressbar";
import { DonutComponent } from "../donut-chart/donut-chart.component";
import { RiskProfileMeterComponent } from "../profile-meter-graph/profile-meter-graph.component";
import { HomePageComponent } from "./home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
];

@NgModule({
  declarations: [
    HomePageComponent,
    RiskProfileMeterComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RoundProgressModule
  ],
  exports: [
    RouterModule
  ]
})
export class HomePageModule { }
