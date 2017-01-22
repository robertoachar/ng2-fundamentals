import { Injectable } from '@angular/core';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor() { }

  login(username: string, password: string) {
    this.currentUser = {
      id: 1,
      firstname: 'John',
      lastname: 'Papa',
      username: username
    }
  }

  updateCurrentUser(firstname: string, lastname: string) {
    this.currentUser.firstname = firstname;
    this.currentUser.lastname = lastname;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
