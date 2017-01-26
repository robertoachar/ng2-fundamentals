import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: Http) { }

  checkAuthenticationStatus() {
    return this.http.get('/api/currentIdentity')
      .map((response: any) => {
        if (response._body) {
          return response.json();
        }
        else {
          return {}
        }
      })
      .do(currentUser => {
        if (!!currentUser.userName) {
          this.currentUser = currentUser;
        }
      })
      .subscribe();
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  login(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let info = { username: username.toLocaleLowerCase(), password: password };

    return this.http.post('/api/login', info, options)
      .do(response => {
        if (response) {
          this.currentUser = <IUser>response.json().user;
        }
      }).catch(error => {
        return Observable.of(false);
      });
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }
}
