import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../../services/adminAuth.service';

@Component({
  selector: 'app-adminlogIn',
  templateUrl: './adminlogIn.component.html',
  styleUrls: ['./adminlogIn.component.css']
})
export class AdminlogInComponent implements OnInit {

  constructor(private adminAuthService :AdminAuthService) { }
  loginAdmin:any ={}
  ngOnInit() {
  }
  login(){
    this.adminAuthService.login(this.loginAdmin);
     }
     logOut(){
       this.adminAuthService.logOut();
     }
     get isAuthenticated(){
       return this.adminAuthService.loggedIn();
     }

}
