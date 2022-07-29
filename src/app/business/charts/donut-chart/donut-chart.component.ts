import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-donut-chart",
  styleUrls: ["./donut-chart.component.scss"],
  templateUrl: "./donut-chart.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonutChartComponent implements OnInit {
  ngOnInit(): void {
  }
}
