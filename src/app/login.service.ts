import { User } from './user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: BehaviorSubject <User> = new BehaviorSubject(undefined);

  // tslint:disable-next-line: no-unused-expression

  constructor() { }
  LogIn(username: string, password: string) {
    if (username && password) {
      this.user.next(new User(username, password));
    }
  }
  LogOut() {
    this.user.next(undefined);
  }
  GetUser(): Observable<User> {
    return this.user;
  }
}
