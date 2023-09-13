import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  user: string = "";
  email: string = "";
  
  constructor(private r: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('Name');
    this.email = localStorage.getItem('email');
  }


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
}
