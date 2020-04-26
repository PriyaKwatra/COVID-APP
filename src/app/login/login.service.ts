import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  mail = "pkwatra96@gmail.com"
  password = "hello"
  loggedIn = false;

  private userLoggedIn = new BehaviorSubject<any>('');
logIn = this.userLoggedIn.asObservable();

  validateUser(mail, password) {

    if (this.mail == mail && this.password == password) {
      console.log("hiiii")
      return true;
    }

    else {
      return false;
    }

  }

  login() {
    this.userLoggedIn.next(true);
  }

}