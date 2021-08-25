import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bid } from 'src/app/modals/Bid';
import { TenderService } from 'src/app/services/tender.service';
import { UserAuthService } from 'src/app/services/UserAuth.service';

@Component({
  selector: 'app-mybids',
  templateUrl: './mybids.component.html',
  styleUrls: ['./mybids.component.css']
})
export class MybidsComponent implements OnInit {

  constructor(private tenderService:TenderService,private activatedRoute: ActivatedRoute, private userAuthService:UserAuthService) { }
  bids :Bid[]=[];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getBidsByUser()
    })
  }
  getBidsByUser(){
    this.tenderService.getBidsByUser(this.userAuthService.getCurrentUserId()).subscribe(data=>{
      this.bids=data;
    })
  }

}
