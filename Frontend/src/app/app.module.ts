import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { Patientlin, patients } from './_models/patients';
import { doctors } from './_models/doctors';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { ValidateUserNameDirective } from './directives/validate-user-name.directive';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AfterUserLoginComponent } from './after-user-login/after-user-login.component';
import { DemoComponent } from './demo/demo.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { admins } from './_models/admins';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent,
    DoctorsComponent,
    PatientRegistrationComponent,
    PatientloginComponent,
    DoctorloginComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective,
    SideNavComponent,
    AfterUserLoginComponent,
    DemoComponent,
    ResetPasswordComponent,
    AdminLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
                patients,
                doctors,
                Patientlin,
                admins
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
