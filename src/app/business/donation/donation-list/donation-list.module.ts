import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { DonationListComponent } from "./donation-list.component";

@NgModule({
  declarations: [
    DonationListComponent
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    DonationListComponent
  ]
})
export class DonationListModule { }
