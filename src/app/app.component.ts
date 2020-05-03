import { Component, OnInit, DoCheck, OnChanges, OnDestroy } from '@angular/core';
import { DistrictUtilsService } from './districtinfo/districtutils.service';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'covid-india';
  loadComponent = false;
  loggedIn = false;
  userDisplayName;
  mail;
  password;

  constructor(private districtUtils: DistrictUtilsService,
    private loginService: LoginService,
    private router: Router,
    private cookieService: CookieService) {
      
    this.mail = this.loginService.mail;
    this.password = this.cookieService.get('password');
    if (!loginService.validateUser(this.mail, this.password)) {
      this.loggedIn = false;
    }
  }

  ngOnInit() {
    this.setLoggedIn();
  }

  ngDoCheck() {
    this.setLoggedIn()
  }

  logOut() {
    this.cookieService.deleteAll();
    this.loginService.loggedIn = false;
    this.router.navigate(['']);
  }

  setLoggedIn() {
    this.loggedIn = this.loginService.loggedIn;
  }

}
