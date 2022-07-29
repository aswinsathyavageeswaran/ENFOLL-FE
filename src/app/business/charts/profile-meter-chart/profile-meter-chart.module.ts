import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RoundProgressModule } from "angular-svg-round-progressbar";
import { ProfileMeterChartComponent } from "./profile-meter-chart.component";

@NgModule({
  declarations: [
    ProfileMeterChartComponent
  ],
  imports: [
    CommonModule,
    RoundProgressModule,
    FlexLayoutModule
  ],
  exports: [
    ProfileMeterChartComponent
  ]
})
export class ProfileMeterChartModule { }