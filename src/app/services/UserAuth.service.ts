import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserLogIn } from '../modals/UserLogIn';
import { UserRegister } from '../modals/UserRegister';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

constructor(private httpClient: HttpClient, private router:Router,
  private alertifyServices:AlertifyService) { }
  path="https://localhost:44323/api/user/"
  userToken:any;
decodedToken:any; 
jwtHelper:JwtHelperService=new JwtHelperService
TOKEN_KEY="token"

login(userLogIn: UserLogIn){
  let headers=new HttpHeaders();
  headers=headers.append("Content-Type","application/json")
  this.httpClient.post(this.path+"userlogin",userLogIn,{responseType:'text'}).subscribe(data=>{
    this.saveToken(data)
    this.userToken=data; 
  this.decodedToken=this.jwtHelper.decodeToken(data.toString());
  this.alertifyServices.success("Sisteme giriş yapıldı")
   this.router.navigateByUrl("/userPage")
  },
  error=>this.alertifyServices.error("ŞİFRE VEYA KULLANICI ADI YANLIŞ")
  )
}
changePassUser(userLogIn: UserLogIn){
  let headers =new HttpHeaders ();
  headers=headers.append("Content-Type","application/json")
  this.httpClient.post(this.path+"changePassUser",userLogIn,{headers:headers}).subscribe(data=>{
    this.alertifyServices.success("Şifre Değişikliği Başarılı! Giriş Sayfasına Yönlendiriliyorsunuz..")
    this.router.navigateByUrl("/userlogin")
  })
}
register(userRegister:UserRegister){
  let headers =new HttpHeaders ();
  headers=headers.append("Content-Type","application/json")
  this.httpClient.post(this.path+"userregister", userRegister,{headers:headers}).subscribe(
    data=>{
      this.alertifyServices.success("Kayıt başarılı! Ana Sayfaya Yönlendiriliyorsunuz..")
       this.router.navigateByUrl("/start")
    }
  )
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
getCurrentUserId(){
  return this.jwtHelper.decodeToken(this.getToken()||'{}').nameid;
}


}
