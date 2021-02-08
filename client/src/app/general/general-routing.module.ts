import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralModule } from './general.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes),
  GeneralModule],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
