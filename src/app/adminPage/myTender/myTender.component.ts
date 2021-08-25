import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Tender } from "src/app/modals/Tender";
import { AdminAuthService } from "src/app/services/adminAuth.service";
import { TenderService } from "src/app/services/tender.service";


@Component({
  selector: 'app-myTender',
  templateUrl: './myTender.component.html',
  styleUrls: ['./myTender.component.css']
})
export class MyTenderComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private tenderService:TenderService,private adminAuthService:AdminAuthService) { }
    tenders:Tender[]=[];
    deneme:Boolean=false;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getTendersByAdminId()
    }) 
    
  }
  
  getTendersByAdminId(){
     this.tenderService.getTendersByAdminId(this.adminAuthService.getCurrentAdminId()).subscribe(data=>{
       this.tenders=data;
     })
  }


}

