import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patientlin, patients } from '../_models/patients';
import { PatientService } from '../_service/patient.service';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit {
showmsg: boolean;


  constructor(public patientobj: Patientlin,public patientserviceobj: PatientService, private router: Router ) {
    // this.FormDemo = this.fb.group(
    //   {
        
    //     email: ['', [Validators.required, Validators.email]],
    //     password: [
    //       '',
    //       [
    //         Validators.required,
    //       ],
    //     ],
    //   }
    // );
  }
   
submitForm()
{
  this.patientserviceobj.patientlogin(this.patientobj).subscribe((res: any) => {
    console.log('RETURN BACK');
    if (res) {
      console.log('VALID USER');
      // localStorage.setItem('Patient',JSON.stringify(res[0]));
      sessionStorage.setItem('Token', res.Token);

      sessionStorage.setItem('usertype', 'Patient');
      localStorage.setItem('usertype', 'Patient');

      sessionStorage.setItem('Name',res.getsearchdocument[0].Firstname +" " +res.getsearchdocument[0].lastname);
      localStorage.setItem('Name',res.getsearchdocument[0].Firstname +" " +res.getsearchdocument[0].lastname);
  
      sessionStorage.setItem('email',res.getsearchdocument[0].email);
      localStorage.setItem('email',res.getsearchdocument[0].email);

      sessionStorage.setItem('patientdetails', JSON.stringify(res.getsearchdocument[0]));
      
      this.router.navigate(['/afteruserlogin']);
    } else {
      // VISIBLE ERROR MESSAGE
      this.showmsg = true;
     
    }

    //CLEAR FORM
    this.patientobj.email = '';
    this.patientobj.password = '';
  });

}
closeAlert(){
  this.showmsg = false;
}
  ngOnInit(): void {
  }
}
