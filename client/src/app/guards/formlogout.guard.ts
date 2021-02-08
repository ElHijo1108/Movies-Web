import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormlogoutGuard implements CanActivate {
  constructor(private autservice:AuthService, private router:Router){

  }
  canActivate() {
    if(this.autservice.getToken()==null){
      this.router.navigate(["/home"]);
      return false;
      
    }else{
      return true;
    }
  }
  
}
