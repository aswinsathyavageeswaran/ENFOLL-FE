import { NgModule } from "@angular/core";
import { DonationFormModule } from "./donation-form/donation-form.module";
import { DonationListModule } from "./donation-list/donation-list.module";

@NgModule({
  declarations: [
  ],
  imports: [
    DonationListModule,
    DonationFormModule
  ],
  exports: [
    DonationListModule,
    DonationFormModule
  ]
})
export class DonationModule { }
