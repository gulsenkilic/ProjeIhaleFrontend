import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bid } from 'src/app/modals/Bid';
import { TenderService } from 'src/app/services/tender.service';

@Component({
  selector: 'app-tenderbid',
  templateUrl: './tenderbid.component.html',
  styleUrls: ['./tenderbid.component.css']
})
export class TenderbidComponent implements OnInit {

constructor(private tenderService:TenderService,private activatedRoute: ActivatedRoute) { }
bids :Bid[]=[];
  ngOnInit() {
   
    this.activatedRoute.params.subscribe(params=>{
      this.getBidsByTender(params["tenderId"])
    })
  }
  getBidsByTender(tenderId:number){
    this.tenderService.getBidsByTender(tenderId).subscribe(data=>{
      this.bids=data;
    })

  }

}
