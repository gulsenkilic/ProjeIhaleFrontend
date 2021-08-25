import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/adminAuth.service';

@Component({
  selector: 'app-changePassAdmin',
  templateUrl: './changePassAdmin.component.html',
  styleUrls: ['./changePassAdmin.component.css']
})
export class ChangePassAdminComponent implements OnInit {

  constructor(private adminAuthService :AdminAuthService) { }
  changeAdmin:any ={}
  ngOnInit() {
  }
  change(){
    this.adminAuthService.changePassAdmin(this.changeAdmin);
     }
     

}
