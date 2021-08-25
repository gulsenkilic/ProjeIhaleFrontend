import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Bid } from 'src/app/modals/Bid';
import { AdminAuthService } from 'src/app/services/adminAuth.service';
import { TenderService } from 'src/app/services/tender.service';
import { Tender } from 'src/app/modals/Tender';
import { Complete } from 'src/app/modals/Complete';
@Component({
  selector: 'app-tender-finish',
  templateUrl: './tender-finish.component.html',
  styleUrls: ['./tender-finish.component.css'],
  providers:[TenderService]
})
export class TenderFinishComponent implements OnInit {

  constructor(private tenderService:TenderService, private adminAuthService:AdminAuthService,
    private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute) { }
    tender :Tender=new Tender;
    bids :Bid[]=[];
    comp :Complete=new Complete;
    deneme:number=0;

    compAddForm=new FormGroup({
      tenderId:new FormControl(""),
      userId:new FormControl(""),
      price:new FormControl(""),
    })
    createCompForm(){
      this.compAddForm=this.formBuilder.group({
        tenderId:["",Validators.required],
        userId:["",Validators.required],
        price:["",Validators.required]
      });
    }

  ngOnInit() {
    this.createCompForm();
    this.activatedRoute.params.subscribe(params =>{
      this.getTenderById(params["tenderId"])
    });
    this.activatedRoute.params.subscribe(params=>{
      this.getBidsByTender(params["tenderId"])
    });
  }
  getTenderById(tenderId:number){
    this.tenderService.getTenderById(tenderId).subscribe(data=>{
      this.tender=data;
    })
  }
  getBidsByTender(tenderId:number){
    this.tenderService.getBidsByTender(tenderId).subscribe(data=>{
      this.bids=data;
    })

  }
  addComp(){
    if(this.compAddForm.valid){
      this.comp=Object.assign({} , this.compAddForm.value);
      this.tenderService.addComp(this.comp);
    }
  }
}
