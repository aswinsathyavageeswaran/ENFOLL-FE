import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DonutChartComponent } from "./donut-chart.component";

@NgModule({
  declarations: [
    DonutChartComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    DonutChartComponent
  ]
})
export class DonutChartModule { }