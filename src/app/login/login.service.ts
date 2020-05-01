import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  mail = "pkwatra96@gmail.com"
  password = "hello"
  loggedIn = false;

  validateUser(mail, password) {
    if (this.mail == mail && this.password == password) {
      this.loggedIn = true;
      return true;
    }

    else {
      this.loggedIn = false;
      return false;
    }

  }

}