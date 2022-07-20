import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellPageComponent } from './sell-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DealListModule } from '@business/seller/deal-list/deal-list.module';

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
    DealListModule
  ],
  exports: [
    RouterModule
  ]
})
export class SellPageModule { }
