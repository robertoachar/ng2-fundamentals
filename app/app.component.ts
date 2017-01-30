import { Component, OnInit } from '@angular/core';
// import { AuthService } from './user/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  // constructor(private auth: AuthService) { }

  ngOnInit() {
    // this.auth.checkAuthenticationStatus();
  }
}
