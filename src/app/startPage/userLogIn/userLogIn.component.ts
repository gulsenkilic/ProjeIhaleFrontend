import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/UserAuth.service';

@Component({
  selector: 'app-userLogIn',
  templateUrl: './userLogIn.component.html',
  styleUrls: ['./userLogIn.component.css']
})
export class UserLogInComponent implements OnInit {

  constructor(private userAuthService :UserAuthService) { }
  loginUser:any ={}
  ngOnInit() {
  }
  login(){
    this.userAuthService.login(this.loginUser);
     }
     logOut(){
       this.userAuthService.logOut();
     }
     get isAuthenticated(){
       return this.userAuthService.loggedIn();
     }

}
