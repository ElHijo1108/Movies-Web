import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormloginGuard } from '../guards/formlogin.guard';
import { FormlogoutGuard } from '../guards/formlogout.guard';
import { AuthModule } from './auth.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path:'auth/login',
    component:LoginComponent,
    canActivate:[
      FormloginGuard
    ]
  },
  {
    path:'auth/logout',
    component:LogoutComponent,
    canActivate:[
      FormlogoutGuard
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  AuthModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
