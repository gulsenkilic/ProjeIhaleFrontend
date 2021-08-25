import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tender } from 'src/app/modals/Tender';
import { TenderService } from 'src/app/services/tender.service';

@Component({
  selector: 'app-tender-status',
  templateUrl: './tender-status.component.html',
  styleUrls: ['./tender-status.component.css']
})
export class TenderStatusComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private tenderService:TenderService) { }
  tenders:Tender[]=[];
 

  
    ngOnInit() {
    
      this.activatedRoute.params.subscribe(params=>{
      this.getTendersByStatus()
      })

  }
  getTendersByStatus(){
    this.tenderService.getTendersByStatus().subscribe(data=>{
    this.tenders=data;
    })
  }
 

}
