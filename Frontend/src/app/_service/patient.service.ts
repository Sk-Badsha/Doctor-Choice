import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { patients } from '../_models/patients';
import { Patientlin } from '../_models/patients';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(public httpclientobj: HttpClient)
   {}
    private readonly _URL = 'http://localhost:5000/patient';

    addNewUserUsingPost(patient1: patients) {
      console.log(patient1.Firstname + " " + patient1.lastname);
      let url = this._URL + "/register"
      // CALL POST FUNCTION USING http
      return this.httpclientobj.post(url, patient1);
    }

    patientlogin(patient: Patientlin)
  {
    let url = this._URL + "/login"
    return this.httpclientobj.post(url,patient);
  }


  forgotPassword(patient: patients)
  {
    let url = this._URL + "/forgot-password"
    return this.httpclientobj.post(url, patient);
  }

  profile()
  {
    let url = this._URL + "/afteruserlogin";
    let headers = new HttpHeaders().set("Authorization", `bearer ${sessionStorage.getItem('Token')}`)
    this.httpclientobj.post(url,{},{headers}).subscribe((res: any) => {
  })
}
}
