import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  moduleId: module.id,
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(
    private router: Router,
    private auth: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  save(form: any) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(form.firstName, form.lastName)
        .subscribe(() => {
          this.toastr.success('Profile saved');

          this.router.navigate(['events']);
        });
    }
  }

  validateFirstname() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastname() {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.toastr.success('Logout successfull');

      this.router.navigate(['/user/login']);
    });
  }
}
