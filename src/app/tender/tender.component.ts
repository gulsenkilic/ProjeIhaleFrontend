import { Component, OnInit } from '@angular/core';
import { Tender } from '../modals/Tender';
import { TenderService } from '../services/tender.service';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css'],
  providers:[TenderService]
})
export class TenderComponent implements OnInit {

constructor(private tenderService:TenderService) { }
tenders:Tender[]=[];

  ngOnInit() {
    this.tenderService.getTenders().subscribe(data =>{ 
    this.tenders=data; 
  });
  }
}
