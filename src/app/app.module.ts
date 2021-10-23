import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MloginComponent } from './components/mlogin/mlogin.component';
import { EloginComponent } from './components/elogin/elogin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { MsignupComponent } from './components/msignup/msignup.component';
import { EsignupComponent } from './components/esignup/esignup.component';
import { FormsModule } from '@angular/forms';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MloginComponent,
    EloginComponent,
    AdminLoginComponent,
    MsignupComponent,
    EsignupComponent,
    EsignupComponent,
    MsignupComponent,
    EmployeeManagementComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
