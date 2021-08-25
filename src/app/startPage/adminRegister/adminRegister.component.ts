import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from '../../services/adminAuth.service';

@Component({
  selector: 'app-adminRegister',
  templateUrl: './adminRegister.component.html',
  styleUrls: ['./adminRegister.component.css']
})
export class AdminRegisterComponent implements OnInit {

  constructor(private adminAuthService:AdminAuthService, private formBuilder:FormBuilder) { }
  adminRegisterForm= new FormGroup({
    name:new FormControl(""),
    lastName:new FormControl(""),
    userName:new FormControl(""),
    password:new FormControl(""),
    confirmPassword:new FormControl(""),
  }) ;
  adminRegister:any={}
  ngOnInit() {
    this.createAdminRegisterForm();
  }
  createAdminRegisterForm(){
this.adminRegisterForm=this.formBuilder.group({
  name:["",Validators.required],
  lastName:["",Validators.required],
  userName:["",Validators.required],
  password:["",[Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
 confirmPassword:["",Validators.required] 
},
{Validator:this.passwordMatchValidator})

  }
  passwordMatchValidator (g:FormGroup){
    return g.get('password')?.value === 
    g.get('confirmPassword')?.value?null:{mismatch:true}
  }
  register(){
    if(this.adminRegisterForm.valid){
      this.adminRegister=Object.assign({},this.adminRegisterForm.value)
      this.adminAuthService.register(this.adminRegister)
    }
  }
}
