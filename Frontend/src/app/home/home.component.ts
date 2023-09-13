import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userExist: boolean;
  
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('usertype') !== null)
    {
      this.userExist = true;
    }
  }

}
