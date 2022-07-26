import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'donate', loadChildren: () => import('./pages/donate-page/donate-page.module').then(m => m.DonatePageModule) },
  { path: 'sell', loadChildren: () => import('./pages/sell-page/sell-page.module').then(m => m.SellPageModule) },
  { path: 'buy', loadChildren: () => import('./pages/buy-page/buy-page.module').then(m => m.BuyPageModule) },
  { path: 'match', loadChildren: () => import('./pages/match-page/match-page.module').then(m => m.MatchPageModule) },
  { path: 'estimate', loadChildren: () => import('./pages/estimate-page/estimate-page.module').then(m => m.EstimatePageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
