import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Routes, Router } from '@angular/router';

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
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.signIn = this.loginService.validateUser(this.mail, this.password);
    if (this.signIn) {
      sessionStorage.setItem("loggedIn", "true");
      this.loginService.login();
      this.router.navigate(['']);
    }
    else {
      window.alert("incorrect email password");
    }
  }
}