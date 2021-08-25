import { HttpClient,HttpContextToken, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AdminLogIn } from '../modals/AdminLogIn';
import { AdminRegister } from '../modals/AdminRegister';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

constructor(private httpClient: HttpClient, private router:Router,
private alertifyServices:AlertifyService) { }
path="https://localhost:44323/api/admin/"
userToken:any;
decodedToken:any; 
jwtHelper:JwtHelperService=new JwtHelperService
TOKEN_KEY="token"

login(adminLogIn: AdminLogIn){
  let headers =new HttpHeaders ();
  headers=headers.append("Content-Type","application/json")
  this.httpClient.post(this.path+"adminlogin",adminLogIn,{responseType:'text'}).subscribe(
    data=>{
      this.saveToken(data)
    this.userToken=data; 
  this.decodedToken=this.jwtHelper.decodeToken(data.toString());
  this.alertifyServices.success("Sisteme giriş yapıldı")
   this.router.navigateByUrl("/adminpage")
    },
    error=>this.alertifyServices.error("ŞİFRE VEYA KULLANICI ADI YANLIŞ")
  )
}
changePassAdmin(adminLogIn: AdminLogIn){
  //let headers =new HttpHeaders ();
 // headers=headers.append("Content-Type","application/json")
  this.httpClient.post(this.path+"changePassAdmin",adminLogIn).subscribe(data=>{
    this.alertifyServices.success("Şifre Değişikliği Başarılı! Giriş Sayfasına Yönlendiriliyorsunuz..")
    this.router.navigateByUrl("/adminlogin")
  })
}
register(adminRegister:AdminRegister){
  let headers =new HttpHeaders ();
  headers=headers.append("Content-Type","application/json")
  this.httpClient.post(this.path+"adminregister", adminRegister,{headers:headers}).subscribe(data=>{
    this.alertifyServices.success("Kayıt başarılı! Ana Sayfaya Yönlendiriliyorsunuz..")
    this.router.navigateByUrl("/start")
  })
}
saveToken(token:string){
  localStorage.setItem(this.TOKEN_KEY,token)
}
logOut(){
  localStorage.removeItem(this.TOKEN_KEY)
  this.alertifyServices.error("Sisteme çıkış yapıldı")
}
loggedIn(){
  return this.jwtHelper.isTokenExpired(this.TOKEN_KEY);
}
getToken(){
  return localStorage.getItem(this.TOKEN_KEY);
}
getCurrentAdminId(){
  return this.jwtHelper.decodeToken(this.getToken()||'{}').nameid;
}

}
