import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRouting } from './user.routing';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    UserRouting
  ],
  exports: [],
  declarations: [ProfileComponent],
  providers: [],
})
export class UserModule { }
