import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complete } from 'src/app/modals/Complete';
import { TenderService } from 'src/app/services/tender.service';
import { UserAuthService } from 'src/app/services/UserAuth.service';

@Component({
  selector: 'app-mycomplete',
  templateUrl: './mycomplete.component.html',
  styleUrls: ['./mycomplete.component.css']
})
export class MycompleteComponent implements OnInit {

  constructor(private tenderService:TenderService,private activatedRoute: ActivatedRoute, private userAuthService:UserAuthService) { }
completes:Complete[]=[];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getCompleteByUser();
    })
  }
  getCompleteByUser(){
    this.tenderService.getCompletesByUser(this.userAuthService.getCurrentUserId()).subscribe(data=>{
      this.completes=data;
    })
  }

}
