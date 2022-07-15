import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-donate-page",
  templateUrl: "./donate-page.component.html",
  styleUrls: ["./donate-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonatePageComponent { }
