import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bid } from '../modals/Bid';
import { Complete } from '../modals/Complete';
import { Tender } from '../modals/Tender';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

constructor(private httpclient:HttpClient, private alertiySercice:AlertifyService,private router :Router ) { }
path="https://localhost:44323/api/";
getTenders():Observable<Tender[]>{
  return this.httpclient.get<Tender[]>(this.path+"tenders");
}
getTenderById(tenderId:number):Observable<Tender>{
  return this.httpclient.get<Tender>(this.path+"tenders/detail/?tenderId= "+tenderId);
}

getTendersByStatus():Observable<Tender[]>{
  return this.httpclient.get<Tender[]>(this.path+"tenders/status")
}
getTendersByAdminId(adminid:number):Observable<Tender[]>{
  return this.httpclient.get<Tender[]>(this.path+"tenders/mytender/?adminId= "+adminid)
}
getBidsByTender(tenderId:number):Observable<Bid[]>{
  return this.httpclient.get<Bid[]>(this.path+"tenders/bids/?tenderId= "+tenderId)
}
getBidsByUser(userId:number):Observable<Bid[]>{
  return this.httpclient.get<Bid[]>(this.path+"tenders/mybids/?userId= "+userId)
}
getCompletesByUser(userId:number):Observable<Complete[]>{
  return this.httpclient.get<Complete[]>(this.path+"tenders/mycompletes/?userId="+ userId)
}
getCompletes():Observable<Complete[]>{
  return this.httpclient.get<Complete[]>(this.path+"tenders/completes")
}
tenderCancel(tenderId:number):Observable<Tender>{
  return this.httpclient.get<Tender>(this.path+"tenders/cancel/?tenderId= "+tenderId)
}
getTenderLoseOut(userId:number):Observable<Bid[]>{
  return this.httpclient.get<Bid[]>(this.path+"tenders/loseOut/?userId= "+userId)
}

add(tender:Tender){
  this.httpclient.post(this.path+'tenders/add',tender).subscribe(data=>{
    this.alertiySercice.success("Ihale başarıyla eklendi!")
    this.router.navigateByUrl('/adminpage')
  });
  

}
addComp(comp:Complete){
  this.httpclient.post(this.path+"tenders/compadd",comp).subscribe(data=>{
    this.alertiySercice.success("Ihale Tamamlandı!")
    this.router.navigateByUrl('/adminpage')
  })
}

addBid(bid:Bid){
  this.httpclient.post(this.path+"tenders/bidadd",bid).subscribe(data=>{
    this.alertiySercice.success("Teklif Başarı İle Kayıt Edildi!")
    this.router.navigateByUrl('/userPage')
  })
 
}

}
