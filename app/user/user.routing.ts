import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: 'user', children: [
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRouting { }

export const routedComponents = [
  LoginComponent,
  ProfileComponent
];
