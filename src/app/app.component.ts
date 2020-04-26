import { Component, OnInit, DoCheck } from '@angular/core';
import { GetService } from './get.service';
import { DistrictUtilsService } from './districtinfo/districtutils.service';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covid-india';
  loadComponent =false;
  loggedIn = false;

  constructor(private districtUtils:DistrictUtilsService,
    private loginService:LoginService,
     private router:Router){     
  }

  ngOnInit(){
      this.loggedIn= sessionStorage.getItem("loggedIn")=="true";
      console.log(this.loggedIn);
  }

  logOut(){
     sessionStorage.setItem("loggedIn","false");
     console.log(this.loggedIn);
     this.router.navigate(['']);
  }

}
