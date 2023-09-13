import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AfterUserLoginComponent } from './after-user-login/after-user-login.component';
import { DemoComponent } from './demo/demo.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ServiceComponent } from './service/service.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'our_doctors',
    component: DoctorsComponent,
  },
  {
    path: 'patientReg',
    component: PatientRegistrationComponent,
  },
  {
    path: 'patientlogin',
    component: PatientloginComponent,
  },
  { path: 'afteruserlogin', 
    component: AfterUserLoginComponent
 },
 {
  path: 'Demo',
  component: DemoComponent
 },
 {
  path: 'reset-password',
  component: ResetPasswordComponent
 }, 
 {
  path: 'Admin-Login',
  component: AdminLoginComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
