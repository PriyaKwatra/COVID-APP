import { Component, OnInit, DoCheck } from '@angular/core';
import { GetService } from './get.service';
import { DistrictUtilsService } from './districtinfo/districtutils.service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,DoCheck {
  title = 'covid-india';
  loadComponent =false;
  loggedOut = true;

  constructor(private districtUtils:DistrictUtilsService,private loginService:LoginService){     
  }

  ngOnInit(){
      this.loggedOut=this.loginService.loggedOut;
  }

  logOut(){
    this.loggedOut=true;
     this.loginService.logOut();
  }

  ngDoCheck(){
    this.loggedOut=this.loginService.loggedOut;
  }

}
