import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

import { NavModule } from '../../shared/nav/nav.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NavModule,
    MatSidenavModule


  ]
})
export class ProfileModule { }
