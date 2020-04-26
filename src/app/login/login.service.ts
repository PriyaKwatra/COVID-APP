import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class LoginService{

mail = "pkwatra96@gmail.com"
password = "hello"
loggedOut = true;

validateUser(mail, password){

if(this.mail==mail && this.password == password){
    console.log("hiiii")
    return true;
}

else{
    return false;
}

}

logOut(){
  this.loggedOut=true;
}


}