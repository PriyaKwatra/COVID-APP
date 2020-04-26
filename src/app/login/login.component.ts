import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', 
]})
export class LoginComponent implements OnInit {

  mail
  password
  signIn:boolean = false;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.signIn= this.loginService.validateUser(this.mail,this.password);
    if(this.signIn){
      this.loginService.loggedOut=false;
      this.router.navigate(['']);
      sessionStorage.setItem("loggedIn", "true");
    }
    else{
      window.alert("incorrect email password");
    }
    
  }

}
