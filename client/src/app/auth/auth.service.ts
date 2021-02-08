import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient, private userservice: UserService) { }

  token: string = '';
  user: any;

  login(user: Login) {
    return this.http.post(`${this.API_URI}/auth`, user);
  }
  logout(){
    localStorage.removeItem("UserInfo");
    localStorage.removeItem("UserTk");
  }

  saveToken(token: string) {
    localStorage.setItem("UserTk", token);
  }
  getToken() {
    return localStorage.getItem("UserTk");
  }
  saveUserInformation(id: string) {
    localStorage.setItem("UserInfo", JSON.stringify(id));
    /*this.userservice.getOne(id).subscribe(
      res => {
        localStorage.setItem("UserInfo", JSON.stringify(res));
      },
      err => console.error(err));*/
  }
  getUserInformation() {
    console.log(typeof localStorage.getItem("UserInfo"));
    return localStorage.getItem("UserInfo");
    
  }

}
