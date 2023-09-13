import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuType : string = 'default';

  constructor(private r: Router) {}
  public isUserlogedin() : boolean {
    
    if(localStorage.getItem('usertype') === 'Patient')
    {
      return true;
    }
  }

  public isAdminlogin(): boolean{
    if(localStorage.getItem('usertype') === 'Admin')
    {
      return true;
    }
  }
  public isDoctorlogin(): boolean{
    if(localStorage.getItem('usertype') === 'Doctor')
    {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('usertype');
    localStorage.removeItem('Token');
    
    localStorage.clear();
    //OR
    sessionStorage.removeItem('usertype');
    sessionStorage.removeItem('Token'); 
    sessionStorage.clear();

    //STEP 3 -REDIRECTING
    this.r.navigate(['/home']);
  }

  ngOnInit(): void {
    // this.r.events.subscribe((val: any) => {
    //   console.log("Inside ngonIt")
    //   if (val.url) {
    //     console.warn(val.url);
    //     if (localStorage.getItem('admin') && val.url.includes('admin')) {
    //       let adminStore = localStorage.getItem('admin');
    //       let adminData = adminStore && JSON.parse(adminStore)[0];
    //       // this.adminName = adminData.name;
    //       console.log('Inside If Method');
    //       this.menuType = 'admin';
    //     }
    //      else if (
    //       localStorage.getItem('Patient')
    //     ) {
    //       let userStore = localStorage.getItem('Patient');
    //       let userData = userStore && JSON.parse(userStore);
    //       // this.patientName = userData.name;
    //       console.log('Inside else if 1 Method');
    //       this.menuType = 'Patient';
    //       // this.product.getCartList(userData.id);
    //     } else if (localStorage.getItem('doctor')) {
    //       let doctorStore = localStorage.getItem('user');
    //       let doctorData = doctorStore && JSON.parse(doctorStore);
    //       console.log('Inside else If 2 Method');
    //       this.menuType = 'doctor';
    //     }
    //     else {
    //       // this.menuType = 'default';
    //       console.log('Insid else If 3 Method');
    //     }
    //   }
    // });
    // console.log('Inside On Submit');
    // console.log("MenuType: " + this.menuType);
   
  }
}
