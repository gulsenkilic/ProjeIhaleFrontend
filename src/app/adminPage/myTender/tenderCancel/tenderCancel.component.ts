import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Tender } from "src/app/modals/Tender";
import { AdminAuthService } from "src/app/services/adminAuth.service";
import { AlertifyService } from "src/app/services/alertify.service";
import { TenderService } from "src/app/services/tender.service";

@Component({
  selector: 'app-tenderCancel',
  templateUrl: './tenderCancel.component.html',
  styleUrls: ['./tenderCancel.component.css']
})
export class TenderCancelComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private alertiySercice:AlertifyService,
  private tenderService:TenderService,private adminAuthService:AdminAuthService,private router :Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.tenderCancel(params["tenderId"]);
    })
  }
  tenderCancel(tenderId:number){
    this.tenderService.tenderCancel(tenderId).subscribe(data=>{
      this.alertiySercice.success("Ihale Başarı İptal Edildi"),
      this.router.navigateByUrl('/mytender')
    })

  }

}
