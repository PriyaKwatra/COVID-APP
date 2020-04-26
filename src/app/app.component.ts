import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { GetService } from './get.service';
import { DistrictUtilsService } from './districtinfo/districtutils.service';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'covid-india';
  loadComponent = false;
  loggedIn = false;

  constructor(private districtUtils: DistrictUtilsService,
    private loginService: LoginService,
    private router: Router) {
  }

  ngOnInit() {
    this.loginService.logIn.subscribe(userLoggedIn => {
      this.loggedIn =    true;
    });

    this.loggedIn =  sessionStorage.getItem("loggedIn") == "true";
    console.log(this.loggedIn);
  }

  // ngDoCheck() {
  //   this.loggedIn = sessionStorage.getItem("loggedIn") == "true";
  // }

  logOut() {
    sessionStorage.setItem("loggedIn","false");
    console.log(this.loggedIn);
    window.location.reload();
  }

}
