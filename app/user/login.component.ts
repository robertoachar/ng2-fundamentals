import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() { }

  login(form) {
    this.auth.login(form.username, form.password);

    this.cancel();
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
