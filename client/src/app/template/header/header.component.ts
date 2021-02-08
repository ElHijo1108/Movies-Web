import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authaservice: AuthService) { }

  userLogged: boolean=false;
  ngOnInit(): void {
    this.showMenu();
  }


  showMenu(){
    let userInfo=this.authaservice.getToken();
    if(userInfo==null){
      this.userLogged=false;
    }else{
      this.userLogged=true;
    }
  }
}
