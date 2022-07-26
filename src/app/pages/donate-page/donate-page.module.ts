import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DonationModule } from "@business/donation/donation.module";
import { DonatePageComponent } from "./donate-page.component";
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule, Routes } from "@angular/router";
import { NgoLocationService } from "@api/services/ngo-location.service";
import { DonationFormModule } from "@business/donation/donation-form/donation-form.module";

const routes: Routes = [
  { path: '', component: DonatePageComponent },
];

@NgModule({
  declarations: [
    DonatePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DonationModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    NgoLocationService
  ]
})
export class DonatePageModule { }
