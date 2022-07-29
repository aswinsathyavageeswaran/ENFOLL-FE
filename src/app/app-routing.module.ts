import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const SELLER = 'Manuel Domingos';
const BUYER = 'The Honnold Foundation'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./pages/donate-page/donate-page.module').then(m => m.DonatePageModule)
  },
  {
    path: 'sell',
    loadChildren: () => import('./pages/sell-page/sell-page.module').then(m => m.SellPageModule),
    data: { username: SELLER }
  },
  {
    path: 'buy',
    loadChildren: () => import('./pages/buy-page/buy-page.module').then(m => m.BuyPageModule),
    data: { username: BUYER }
  },
  {
    path: 'match',
    loadChildren: () => import('./pages/match-page/match-page.module').then(m => m.MatchPageModule),
    data: { username: BUYER }
  },
  {
    path: 'estimate',
    loadChildren: () => import('./pages/estimate-page/estimate-page.module').then(m => m.EstimatePageModule),
    data: { username: BUYER }
  },
  {
    path: 'loan',
    loadChildren: () => import('./pages/loan-page/loan-page.module').then(m => m.LoanPageModule),
    data: { username: BUYER }
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
