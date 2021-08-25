import { Component, OnInit } from '@angular/core';
import { Tender } from 'src/app/modals/Tender';
import { TenderService } from 'src/app/services/tender.service';

@Component({
  selector: 'app-userTender',
  templateUrl: './userTender.component.html',
  styleUrls: ['./userTender.component.css']
})
export class UserTenderComponent implements OnInit {

  constructor(private tenderService:TenderService){ }
  tenders:Tender[]=[];
  ngOnInit() {
    this.tenderService.getTenders().subscribe(data =>{ 
      this.tenders=data; 
    });
  }

}
