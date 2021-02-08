import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.css']
})
export class UserCreatorComponent implements OnInit {
  user:User={
    id:0,
    name:'',
    email:'',
    password:'',
    birthdate: new Date(),
    activation: true
  }
  fecha:Date=new Date();
  constructor(private userservice:UserService,private router :Router) { }

  ngOnInit(): void {
  }

  addUser(){
    delete this.user.id;
    this.userservice.addUser(this.user).subscribe(
      res=>{
        this.router.navigate(['/home'])
      },
      err=>console.error(err)
    );

  }
}
