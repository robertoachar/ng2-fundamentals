import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;

  constructor(
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
    this.firstname = new FormControl(this.auth.currentUser.firstname, Validators.required);
    this.lastname = new FormControl(this.auth.currentUser.lastname, Validators.required);

    this.profileForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname
    });
  }

  save(form) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(form.firstname, form.lastname);

      this.cancel();
    }
  }

  validateFirstname() {
    return this.firstname.valid || this.firstname.untouched;
  }

  validateLastname() {
    return this.lastname.valid || this.lastname.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
