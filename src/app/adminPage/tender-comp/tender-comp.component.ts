import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complete } from 'src/app/modals/Complete';
import { TenderService } from 'src/app/services/tender.service';

@Component({
  selector: 'app-tender-comp',
  templateUrl: './tender-comp.component.html',
  styleUrls: ['./tender-comp.component.css']
})
export class TenderCompComponent implements OnInit {

  constructor(private tenderService:TenderService,private activatedRoute: ActivatedRoute) { }
  completes:Complete[]=[];
  ngOnInit() {
    this.tenderService.getCompletes().subscribe(data=>{
      this.completes=data;
    })
  }


}
