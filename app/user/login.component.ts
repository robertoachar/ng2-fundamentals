import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  login(values) {
    console.log(values.username);
    console.log(values.password);
  }
}
