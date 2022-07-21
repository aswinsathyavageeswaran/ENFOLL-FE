import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellPageComponent } from './sell-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DealListModule } from '@business/seller/deal-list/deal-list.module';
import { SellerFormModule } from '@business/seller/seller-form/seller-form.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: '', component: SellPageComponent },
];

@NgModule({
  declarations: [
    SellPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatCardModule,
    SellerFormModule,
    DealListModule
  ],
  exports: [
    RouterModule
  ]
})
export class SellPageModule { }
