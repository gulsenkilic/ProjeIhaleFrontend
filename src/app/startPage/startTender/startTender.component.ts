import { Component, OnInit } from '@angular/core';
import { Tender } from 'src/app/modals/Tender';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TenderService } from 'src/app/services/tender.service';

@Component({
  selector: 'app-startTender',
  templateUrl: './startTender.component.html',
  styleUrls: ['./startTender.component.css']
})
export class StartTenderComponent implements OnInit {

  constructor(private tenderService:TenderService, public alertify:AlertifyService) { }
  
  tenders:Tender[]=[];
  deneme:any;
  ngOnInit() {
    this.tenderService.getTenders().subscribe(data =>{ //getcity city.servicenin içinde
      this.tenders=data; 
    });
  }

}
