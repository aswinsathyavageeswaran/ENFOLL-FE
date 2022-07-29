import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { RouterModule, Routes } from "@angular/router";
import { DonutChartModule } from "@business/charts/donut-chart/donut-chart.module";
import { ProfileMeterChartModule } from "@business/charts/profile-meter-chart/profile-meter-chart.module";
import { HomePageComponent } from "./home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
];

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatCardModule,
    ProfileMeterChartModule,
    DonutChartModule,
    MatButtonModule
  ],
  exports: [
    RouterModule
  ]
})
export class HomePageModule { }
