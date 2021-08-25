import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Bid } from 'src/app/modals/Bid';
import { Tender } from 'src/app/modals/Tender';
import { TenderService } from 'src/app/services/tender.service';
import { UserAuthService } from 'src/app/services/UserAuth.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css'],
  providers:[TenderService]
})
export class BidComponent implements OnInit {

  constructor(private tenderService:TenderService, private userAuthService:UserAuthService,
    private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute) { }
   bid :Bid=new Bid();
   tender :Tender=new Tender;

  bidAddForm=new FormGroup({
  bids:new FormControl(""),
  tenderId:new FormControl("")
})
createBidForm(){
  this.bidAddForm=this.formBuilder.group({
    tenderId:["",Validators.required],
    bids:["",Validators.required]
   
  });
}
  ngOnInit() {
    this.createBidForm();
    this.activatedRoute.params.subscribe(params =>{
      this.getTenderById(params["tenderId"])
    });
  }
  addBid(){
    if(this.bidAddForm.valid){
      this.bid=Object.assign({},this.bidAddForm.value);
      this.bid.userId=this.userAuthService.getCurrentUserId();
      this.tenderService.addBid(this.bid);
    }
  }
  getTenderById(tenderId:number){
    this.tenderService.getTenderById(tenderId).subscribe(data=>{
      this.tender=data;
    })
  }

}
