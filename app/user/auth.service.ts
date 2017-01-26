import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: Http) { }

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
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
