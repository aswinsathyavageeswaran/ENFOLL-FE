import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PageComponent } from "./page.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from "@angular/router";
import { SignInModule } from "@common/sign-in/sign-in.module";
import { MatDialogModule } from '@angular/material/dialog';
import { RoundProgressModule } from "angular-svg-round-progressbar";

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    SignInModule,
    MatDialogModule
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }