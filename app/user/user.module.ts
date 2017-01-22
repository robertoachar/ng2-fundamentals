import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRouting } from './user.routing';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRouting
  ],
  exports: [],
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  providers: [],
})
export class UserModule { }
