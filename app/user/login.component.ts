import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  loginInvalid: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() { }

  login(form) {
    this.auth.login(form.username, form.password)
      .subscribe(response => {
        if (!response) {
          this.loginInvalid = true;
        }
        else {
          this.router.navigate(['/']);
        }
      });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
