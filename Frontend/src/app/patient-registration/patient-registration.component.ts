import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { patients } from '../_models/patients';
import { PatientService } from '../_service/patient.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css'],
})
export class PatientRegistrationComponent implements OnInit {
  isSubmitted: boolean;
  submiited: false;
  errormsg: boolean;
  showmsg: boolean;
 
  constructor(
    public Patientobj: patients,
    public patientserviceobj: PatientService,
    private router: Router
  ) {
    // this.FormDemo = this.fb.group(
    //   {
    //     Firstname: ['', Validators.required],
    //     lastname: ['', [Validators.required]],
    //     email: ['', [Validators.required, Validators.email]],
    //     mobileno: [
    //       '',
    //       [Validators.required, Validators.pattern('^(0)?[0-9]{10}$')],
    //     ],
    //     address1: ['', [Validators.required]],
    //     address2: ['', [Validators.required]],
    //     city: ['', [Validators.required]],
    //     state: ['', [Validators.required]],
    //     zip: ['', [Validators.required]],
    //     password: [
    //       '',
    //       [
    //         Validators.required,
    //         Validators.minLength(6),
    //         Validators.maxLength(15),
    //       ],
    //     ],
    //     termsConditionsStatus: [],
    //     confirmpassword: [null, Validators.compose([Validators.required])],
    //   },
    //   {
    //     validator: this.ConfirmedValidator('password', 'confirmpassword'),
    //   }
    // );
  }

  // ConfirmedValidator(controlName: string, matchingControlName: string) {
  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingControlName];
  //     if (
  //       matchingControl.errors &&
  //       !matchingControl.errors.confirmedValidator
  //     ) {
  //       return;
  //     }
  //     if (control.value !== matchingControl.value) {
  //       matchingControl.setErrors({ confirmedValidator: true });
  //     } else {
  //       matchingControl.setErrors(null);
  //     }
  //   };
  // }
  ngOnInit(): void {}

  setDataInForm() {
    // this.form.Firstname.setValue('Sk');
    // this.form.lastname.setValue('Badsha');
    // this.form.email.setValue('badshabhota@gmail.com');
    // this.form.mobileno.setValue('0123456789');
    // this.form.address1.setValue('NewTown, Kolkata');
    // this.form.address2.setValue('Purba Bardhaman, West Bengal');
    // this.form.city.setValue('Kolkata');
    // this.form.state.setValue('West Bengal 98831216845');
    // this.form.zip.setValue(' 700135');
    // this.form.termsConditionsStatus.setValue(false);
    // this.form.password.setValue('Admin@123');
    // this.form.confirmpassword.setValue('Admin@123');
    this.Patientobj.Firstname = "Sk";
    this.Patientobj.lastname = "Badsha";
    this.Patientobj.email = "badshabhota@gmail.com";
    this.Patientobj.mobileno = "0123456789";
    this.Patientobj.address1 = "NewTown, Kolkata";
    this.Patientobj.address2 = "Purba Bardhaman, West Bengal";
    this.Patientobj.city = "Kolkata";
    this.Patientobj.state = "West Bengal";
    this.Patientobj.zip = "700135";
    this.Patientobj.password = "Admin@123";
    this.Patientobj.confirmpassword = "Admin@123";
  }

  submitForm(f: NgForm) {
    // if (this.FormDemo.invalid) {
    //   return;
    // }
    


    //FOR INSERT
    this.patientserviceobj
      .addNewUserUsingPost(this.Patientobj)
      .subscribe((res: patients[]) => {
        console.log('RETURN BACK');
        
        console.log(res.length);
        
        if (res.length >= 0) {
          this.errormsg =true;
        } 
        else {
          // VISIBLE REGISTRATION SUCCESS MESSAGE
          f.reset();
        //CLEAR FORM
        // this.Patientobj.Firstname = '';
        // this.Patientobj.lastname = '';
        // this.Patientobj.email = '';
        // this.Patientobj.mobileno= '';
        // this.Patientobj.address1 = '';
        // this.Patientobj.address1 = '';
        // this.Patientobj.state = '';
        // this.Patientobj.zip = '';
        // this.Patientobj.password = '';
        // this.Patientobj.confirmpassword = '';
        // this.Patientobj.city= '';
        setTimeout(function(){
          window.location.reload();
       }, 3000);
      
      this.showmsg = true;
    

       
      }
      
        // alert(" REGISTRATION SUCCESS");
        // this.router.navigate(['/userlogin']);
      });
    
    console.log('First Name :- ' + this.Patientobj.Firstname);
    console.log('Last Name :- ' +  this.Patientobj.lastname);
    console.log('Email :- ' +  this.Patientobj.email);
    console.log('Contact No :- ' +  this.Patientobj.mobileno);
    console.log('Address1 :- ' +  this.Patientobj.address1);
    console.log('Address2 :- ' +  this.Patientobj.address2);
    console.log('City :- ' +  this.Patientobj.city);
    console.log('State :- ' + this.Patientobj.state );
    console.log('Zip :- ' + this.Patientobj.zip );
  }

  closeAlert(){
    this.showmsg = false;
    this.errormsg = false;
  }
}
