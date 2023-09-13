import { Component, OnInit } from '@angular/core';
import { patients } from '../_models/patients';
import { PatientService } from '../_service/patient.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
showmsg: boolean;
showsuccess: boolean;
  constructor(
    public patientobj: patients,
    public patientServiceobj: PatientService
  ) {}

  ngOnInit(): void {}


  closeAlert(){
    this.showmsg = false;
    this.showsuccess = false;
  }

  submitForm() {
    this.closeAlert();
    this.patientServiceobj
      .forgotPassword(this.patientobj)
      .subscribe((res: any) => {
        console.log('Return Back...');
        if(res === null){
        this.showmsg = true;
        console.log("User not registered");
        }else{
          this.showsuccess = true;
          console.log(res);
          console.log("Welcome User valid");
        }
      });
      this.patientobj.email = "";
  }
}
