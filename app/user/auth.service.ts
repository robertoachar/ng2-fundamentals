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

  isAuthenticated() {
    return !!this.currentUser;
  }
}
