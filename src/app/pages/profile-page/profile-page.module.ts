import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ProfileFormModule } from '@business/profile/profile-form/profile-form.module';

const routes: Routes = [
  { path: '', component: ProfilePageComponent }
];

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatCardModule,
    ProfileFormModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProfilePageModule { }
