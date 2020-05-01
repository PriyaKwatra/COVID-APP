import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Routes, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
  ]
})
export class LoginComponent implements OnInit {

  mail
  password
  signIn: boolean = false;
  constructor(private loginService: LoginService,
    private router: Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.signIn = this.loginService.validateUser(this.mail, this.password);
    if (this.signIn) {
      this.cookieService.set('username', this.mail);
      this.cookieService.set('password', this.password);
      this.router.navigate(['']);
    }
    else {
      window.alert("incorrect email password");
    }
  }
}