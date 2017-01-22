import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
    let firstname = new FormControl(this.auth.currentUser.firstname);
    let lastname = new FormControl(this.auth.currentUser.lastname);

    this.profileForm = new FormGroup({
      firstname: firstname,
      lastname: lastname
    });
  }

  save(form) {
    this.auth.updateCurrentUser(form.firstname, form.lastname);

    this.cancel();
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
