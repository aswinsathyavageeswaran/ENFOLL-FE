import { NgModule } from "@angular/core";
import { DonationFormComponent } from "./donation-form/donation-form.component";
import { DonationListComponent } from "./donation-list/donation-list.component";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DonationListComponent,
    DonationFormComponent
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    DonationListComponent,
    DonationFormComponent
  ]
})
export class DonationModule { }
