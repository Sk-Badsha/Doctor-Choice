import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { admins } from '../_models/admins';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public httpclientobj: HttpClient) { }
  private readonly _URL = 'http://localhost:5000/admin';

  adminlogin(admin: admins)
  {
    let url = this._URL + "/login"
    return this.httpclientobj.post(url,admin);
  }
}
