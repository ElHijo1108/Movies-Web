import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService, private router :Router) { }

  user: Login={
    email:'',
    password:''
  }

  user2:any;
  ngOnInit(): void {
  }

  login (){
    this.authservice.login(this.user).subscribe(
      res=>{
        this.user2=res;
        this.authservice.saveToken(this.user2.token);
        this.authservice.saveUserInformation(this.user2.userId);
        location.reload();
      }
    );
    //
  }

}
