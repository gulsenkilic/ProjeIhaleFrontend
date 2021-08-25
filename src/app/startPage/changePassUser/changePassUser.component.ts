import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/adminAuth.service';
import { UserAuthService } from 'src/app/services/UserAuth.service';

@Component({
  selector: 'app-changePassUser',
  templateUrl: './changePassUser.component.html',
  styleUrls: ['./changePassUser.component.css']
})
export class ChangePassUserComponent implements OnInit {

  constructor(private userAuthService :UserAuthService) { }
  changeUser:any ={}
  ngOnInit() {
  }
  change(){
    this.userAuthService.changePassUser(this.changeUser);
     }

}
