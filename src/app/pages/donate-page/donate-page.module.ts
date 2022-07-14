import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DonationModule } from "@business/donation/donation.module";
import { DonatePageRoutingModule } from "./donate-page-routing.module";
import { DonatePageComponent } from "./donate-page.component";

@NgModule({
  declarations: [
    DonatePageComponent
  ],
  imports: [
    CommonModule,
    DonatePageRoutingModule,
    DonationModule
  ],
  exports: []
})
export class DonatePageModule { }
