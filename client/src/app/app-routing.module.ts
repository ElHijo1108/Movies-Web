import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { GeneralRoutingModule } from './general/general-routing.module';
import { MovieRoutingModule } from './movie/movie-routing.module';
import { UserRoutingModule } from './user/user-routing.module';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    UserRoutingModule,
    MovieRoutingModule,
    AuthRoutingModule,
    GeneralRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
