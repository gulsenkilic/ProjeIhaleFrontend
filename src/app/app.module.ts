import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './adminPage/nav/nav.component';
import { TenderComponent } from './tender/tender.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { TenderAddComponent } from './tender/tender-add/tender-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { AdminlogInComponent } from './startPage/adminlogIn/adminlogIn.component';
import { AdminRegisterComponent } from './startPage/adminRegister/adminRegister.component';
import { JwtModule } from '@auth0/angular-jwt';
import { StartPageComponent } from './startPage/startPage.component';
import { NavToStartComponent } from './startPage/navToStart/navToStart.component';
import { TenderDetailComponent } from './tender/tender-detail/tender-detail.component';
import { StartTenderComponent } from './startPage/startTender/startTender.component';
import { UserRegisterComponent } from './startPage/UserRegister/UserRegister.component';
import { UserLogInComponent } from './startPage/userLogIn/userLogIn.component';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { TenderStatusComponent } from './tender/tender-status/tender-status.component';
import { MyTenderComponent } from './adminPage/myTender/myTender.component';
import { TenderCompComponent } from './adminPage/tender-comp/tender-comp.component';
import { TenderbidComponent } from './adminPage/tenderbid/tenderbid.component';
import { UserPageComponent } from './userPage/userPage.component';
import { NavUserComponent } from './userPage/nav-user/nav-user.component';
import { UserTenderComponent } from './userPage/userTender/userTender.component';
import { MybidsComponent } from './userPage/mybids/mybids.component';
import { MycompleteComponent } from './userPage/mycomplete/mycomplete.component';
import { BidComponent } from './userPage/bid/bid.component';
import { MyloseOutComponent } from './userPage/myloseOut/myloseOut.component';
import { ChangePassAdminComponent } from './startPage/changePassAdmin/changePassAdmin.component';
import { ChangePassUserComponent } from './startPage/changePassUser/changePassUser.component';
import { FileUploadModule } from 'ng2-file-upload';
import { CommonModule } from '@angular/common';
import { DenemePhotoComponent } from './denemePhoto/denemePhoto.component';
import { TenderFinishComponent } from './tender/tender-finish/tender-finish.component';

@NgModule({
  declarations: [														
    AppComponent,
      NavComponent,
      TenderComponent,
      TenderAddComponent,
      TenderDetailComponent,
      AdminlogInComponent,
      AdminRegisterComponent,
      StartPageComponent,
      NavToStartComponent,
      StartTenderComponent,
      UserRegisterComponent,
      UserLogInComponent,
      AdminPageComponent,
      TenderStatusComponent,
      MyTenderComponent,
      TenderCompComponent,
      TenderbidComponent,
      UserPageComponent,
      NavUserComponent,
      UserTenderComponent,
      MybidsComponent,
      MycompleteComponent,
      BidComponent,
      MyloseOutComponent,
      ChangePassAdminComponent,
      ChangePassUserComponent,
      DenemePhotoComponent,
      TenderFinishComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    JwtModule,
    FileUploadModule,
    CommonModule
    
  ],
  
  providers: [AlertifyService, CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
