import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-donation-form",
  templateUrl: "./donation-form.component.html",
  styleUrls: ["./donation-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonationFormComponent {
  onSubmit(): void { }
}
