import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URI='http://localhost:3000/api'
  constructor(private http: HttpClient) { }


  addUser(user:User){
    return this.http.post(`${this.API_URI}/users`,user);
  }

  getOne(id:string){
    console.log(id);
    return this.http.get(`${this.API_URI}/users/${id}`);
  }
}
