import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { UserVotationComponent } from './user-votation/user-votation.component';
import { UserModule } from './user.module';

const routes: Routes = [
  {
    path:'user/creator',
    component:UserCreatorComponent
  },
  {
    path:'user/votation',
    component:UserVotationComponent
  },
  {
    path:'user',
    pathMatch:'full',
    redirectTo:'/user/votation'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  UserModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
