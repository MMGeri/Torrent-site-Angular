import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInComponent } from './logged-in.component';

const routes: Routes = [
  {
    path: '', 
    component: LoggedInComponent
  },
  {
    path :'login',
    loadChildren: () => import('../login/login.module').then(m => m.LoginModule)
  },
  {
    path :'main',
    loadChildren: () => import('../main/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }
