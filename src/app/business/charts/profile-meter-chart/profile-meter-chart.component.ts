import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-profile-meter-chart",
  styleUrls: ["./profile-meter-chart.component.scss"],
  templateUrl: "./profile-meter-chart.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileMeterChartComponent {
  @Input() loading = false;
  residualAverage = 70;
}
