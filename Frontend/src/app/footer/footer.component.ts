import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  userExist: boolean;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('usertype') !== null)
    {
      this.userExist = true;
    }
  }

}
