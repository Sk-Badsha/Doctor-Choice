import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admins } from '../_models/admins';
import { AdminService } from '../_service/admin.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  showmsg: boolean;
  constructor(public adminobj: admins, public adminserviceobj: AdminService, private router: Router ) { }
  submitForm()
{
  this.adminserviceobj.adminlogin(this.adminobj).subscribe((res: any) => {
    console.log('RETURN BACK');
    if (res) {
      console.log('VALID USER');
      // localStorage.setItem('Patient',JSON.stringify(res[0]));
     

      sessionStorage.setItem('usertype', 'Admin');
      localStorage.setItem('usertype', 'Admin');

      sessionStorage.setItem('email',res.getsearchdocument[0].email);
      localStorage.setItem('email',res.getsearchdocument[0].email);

      sessionStorage.setItem('admindetails', JSON.stringify(res.getsearchdocument[0]));
      
      this.router.navigate(['/home']);
    } else {
      // VISIBLE ERROR MESSAGE
      this.showmsg = true;
     
    }

    //CLEAR FORM
    this.adminobj.email = '';
    this.adminobj.password = '';
  });

}
closeAlert(){
  this.showmsg = false;
}
  ngOnInit(): void {
  }

}


