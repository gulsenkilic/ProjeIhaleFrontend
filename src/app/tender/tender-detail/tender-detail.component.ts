import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tender } from 'src/app/modals/Tender';
import { TenderService } from 'src/app/services/tender.service';
@Component({
  selector: 'app-tender-detail',
  templateUrl: './tender-detail.component.html',
  styleUrls: ['./tender-detail.component.css']
})
export class TenderDetailComponent implements OnInit {
 
constructor(private activatedRoute: ActivatedRoute, private tenderService:TenderService) { }
tender :Tender=new Tender;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.getTenderById(params["tenderId"])
    })
 
  }
  getTenderById(tenderId:number){
    this.tenderService.getTenderById(tenderId).subscribe(data=>{
      this.tender=data;
    })
  }
 

}


