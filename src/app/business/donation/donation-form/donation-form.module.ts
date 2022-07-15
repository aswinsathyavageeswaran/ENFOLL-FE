import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { DonationFormComponent } from "./donation-form.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    DonationFormComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FlexLayoutModule,
    MatRadioModule,
    RouterModule
  ],
  exports: [
    DonationFormComponent
  ]
})
export class DonationFormModule { }
