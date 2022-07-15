import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DonationModule } from "@business/donation/donation.module";
import { DonatePageRoutingModule } from "./donate-page-routing.module";
import { DonatePageComponent } from "./donate-page.component";
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    DonatePageComponent
  ],
  imports: [
    CommonModule,
    DonatePageRoutingModule,
    DonationModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: []
})
export class DonatePageModule { }
