import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/UserAuth.service';
@Component({
  selector: 'app-UserRegister',
  templateUrl: './UserRegister.component.html',
  styleUrls: ['./UserRegister.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userAuthService:UserAuthService, private formBuilder:FormBuilder) { }
  userRegisterForm= new FormGroup({
    name:new FormControl(""),
    lastName:new FormControl(""),
    userName:new FormControl(""),
    password:new FormControl(""),
    confirmPassword:new FormControl(""),
  }) ;
  userRegister:any={}
  ngOnInit() {
    this.createUserRegisterForm();
  }
  createUserRegisterForm(){
    this.userRegisterForm=this.formBuilder.group({
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
      if(this.userRegisterForm.valid){
        this.userRegister=Object.assign({},this.userRegisterForm.value)
        this.userAuthService.register(this.userRegister)
      }
    }
}
