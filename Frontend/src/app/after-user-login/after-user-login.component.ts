import { Component, OnInit } from '@angular/core';
import { Patientlin, patients } from '../_models/patients';
import { PatientService } from '../_service/patient.service';

@Component({
  selector: 'app-after-user-login',
  templateUrl: './after-user-login.component.html',
  styleUrls: ['./after-user-login.component.css']
})
export class AfterUserLoginComponent implements OnInit {
user: string = "";
  constructor(private patientserviceobj: PatientService, private patientobj: patients) { }

  ngOnInit(): void {
    console.log("after log in")
    this.patientserviceobj.profile();
    this.user = localStorage.getItem('Name');
    console.log(sessionStorage.getItem('Name'));
   


}
}
