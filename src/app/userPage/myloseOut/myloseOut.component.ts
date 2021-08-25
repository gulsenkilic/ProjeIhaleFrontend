import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bid } from 'src/app/modals/Bid';
import { Tender } from 'src/app/modals/Tender';
import { TenderService } from 'src/app/services/tender.service';
import { UserAuthService } from 'src/app/services/UserAuth.service';

@Component({
  selector: 'app-myloseOut',
  templateUrl: './myloseOut.component.html',
  styleUrls: ['./myloseOut.component.css']
})
export class MyloseOutComponent implements OnInit {

  constructor(private tenderService:TenderService,private activatedRoute: ActivatedRoute, private userAuthService:UserAuthService) { }
bids:Bid[]=[];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getTenderLoseOut();
    })
  }
  getTenderLoseOut(){
    this.tenderService.getTenderLoseOut(this.userAuthService.getCurrentUserId()).subscribe(data=>{
      this.bids=data;
    })
  }

}
