import { Routes } from "@angular/router";
import { TenderComponent } from "./tender/tender.component"; 
import { TenderDetailComponent } from "./tender/tender-detail/tender-detail.component";
import { TenderAddComponent } from "./tender/tender-add/tender-add.component";
import { AdminRegisterComponent } from "./startPage/adminRegister/adminRegister.component";
import { StartPageComponent } from "./startPage/startPage.component";
import { UserRegisterComponent } from "./startPage/UserRegister/UserRegister.component";
import { AdminlogInComponent } from "./startPage/adminlogIn/adminlogIn.component";
import { UserLogInComponent } from "./startPage/userLogIn/userLogIn.component";
import { AdminPageComponent } from "./adminPage/adminPage.component";
import { TenderStatusComponent } from "./tender/tender-status/tender-status.component";
import { MyTenderComponent } from "./adminPage/myTender/myTender.component";
import { TenderbidComponent } from "./adminPage/tenderbid/tenderbid.component";
import { UserPageComponent } from "./userPage/userPage.component";
import { MybidsComponent } from "./userPage/mybids/mybids.component";
import { MycompleteComponent } from "./userPage/mycomplete/mycomplete.component";
import { TenderCompComponent } from "./adminPage/tender-comp/tender-comp.component";
import { BidComponent } from "./userPage/bid/bid.component";
import { TenderCancelComponent } from "./adminPage/myTender/tenderCancel/tenderCancel.component";
import { MyloseOutComponent } from "./userPage/myloseOut/myloseOut.component";
import { ChangePassAdminComponent } from "./startPage/changePassAdmin/changePassAdmin.component";
import { ChangePassUserComponent } from "./startPage/changePassUser/changePassUser.component";
import { TenderFinishComponent } from "./tender/tender-finish/tender-finish.component";


export const appRoutes: Routes=[
{path:"start",component:StartPageComponent},
{path:"tender",component:TenderComponent},
{path:"tenderadd",component:TenderAddComponent},
{path:"adminregister",component:AdminRegisterComponent},
{path:"userregister",component:UserRegisterComponent},
{path:"tenderDetail/:tenderId",component:TenderDetailComponent},
{path:"adminlogin", component:AdminlogInComponent},
{path:"userlogin", component:UserLogInComponent},
{path:"adminpage", component:AdminPageComponent},
{path:"status", component:TenderStatusComponent},
{path:"mytender", component:MyTenderComponent},
{path:"cancel/:tenderId", component:TenderCancelComponent},
{path:"tenderbid/:tenderId", component:TenderbidComponent},
{path:"userPage", component:UserPageComponent},
{path:"mybids",component:MybidsComponent},
{path:"mycomplete", component:MycompleteComponent},
{path:"myloseout", component:MyloseOutComponent},
{path:"completes", component:TenderCompComponent},
{path:"bid/:tenderId",component:BidComponent},
{path:"changeAdmin", component:ChangePassAdminComponent},
{path:"changeUser", component:ChangePassUserComponent},
{path:"tenderfinish/:tenderId", component:TenderFinishComponent},
{path:"**",redirectTo:"start",pathMatch:"full"}
];