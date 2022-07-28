import { Component, Input } from "@angular/core";


@Component({
  selector: "risk-profile-meter",
  styleUrls: ["./profile-meter-graph.component.scss"],
  templateUrl: "./profile-meter-graph.component.html"
})
export class RiskProfileMeterComponent {
  @Input() public loading: boolean = false;
  public residualAverage: number = 70;
}
