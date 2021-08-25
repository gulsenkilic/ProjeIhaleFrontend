import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { Tender } from '../modals/Tender';
import { AdminAuthService } from '../services/adminAuth.service';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TenderService } from '../services/tender.service';

@Component({
  selector: 'app-denemePhoto',
  templateUrl: './denemePhoto.component.html',
  styleUrls: ['./denemePhoto.component.css']
})
export class DenemePhotoComponent implements OnInit {
  currentAdmin:any;
  tender : Tender =new Tender;
  imageSrc: string="";
  tenderAddForm=new FormGroup({
    description :new FormControl('',[Validators.required]),
    startDate :new FormControl('',[Validators.required]),
    endDate:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required]),
    description2:new FormControl('',[Validators.required]),
    url:new FormControl('',[Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  })
  constructor(private tenderService:TenderService,private adminAuthService :AdminAuthService, private alertifyService:AlertifyService, 
    private activatedRoute:ActivatedRoute,private http: HttpClient) { }

    get f(){
      return this.tenderAddForm.controls;
    }
    onFileChange(event:any){
      const reader = new FileReader();
      if(event.target.files && event.target.files.length){
      const [url] = event.target.files;
      reader.readAsDataURL(url); 
        reader.onload = () =>{
       this.imageSrc = reader.result as string;
          this.tenderAddForm.patchValue({
           fileSource:reader.result
          });
        };
      }

    }
submit(){

  if(this.tenderAddForm.valid){
    this.tender=Object.assign({},this.tenderAddForm.value);
    this.tender.url=this.imageSrc;
    this.tender.adminId=this.adminAuthService.getCurrentAdminId();
    this.tenderService.add(this.tender);
  }
}
  ngOnInit() {
   this.activatedRoute.params.subscribe(params=>{
     this.currentAdmin=this.adminAuthService.getCurrentAdminId();
   })
  }

}
