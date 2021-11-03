import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { EloginComponent } from './components/elogin/elogin.component';
import { EsignupComponent } from './components/esignup/esignup.component';
import { MloginComponent } from './components/mlogin/mlogin.component';
import { MsignupComponent } from './components/msignup/msignup.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'mlogin', component: MloginComponent},
  {path: 'msignup', component: MsignupComponent},
  {path: 'elogin', component: EloginComponent},
  {path: 'esignup', component: EsignupComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'employee-management', component: EmployeeManagementComponent},
  {path: '**', component: HomeComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
