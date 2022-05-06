import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { NavComponent } from 'src/app/shared/nav/nav.component';
import { NavModule } from 'src/app/shared/nav/nav.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NavModule
  ]
})
export class ProfileModule { }
