import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-donation-form",
  templateUrl: "./donation-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonationFormComponent { }
