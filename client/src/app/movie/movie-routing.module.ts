import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCreatorComponent } from './movie-creator/movie-creator.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieErrorComponent } from './movie-error/movie-error.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieVoteComponent } from './movie-vote/movie-vote.component';
import { MovieModule } from './movie.module';

const routes: Routes = [
  {
    path:'movie/list',
    component:MovieListComponent
  },
  {
    path:'movie/creator',
    component:MovieCreatorComponent
  },
  {
    path:'movie/vote/:id',
    component:MovieVoteComponent
  },
  {
    path:'movie/details/:id',
    component:MovieDetailsComponent
  },
  {
    path:'movie/error/:id',
    component:MovieErrorComponent
  },
  {
    path:'movie',
    pathMatch:'full',
    redirectTo:'/movie/list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  MovieModule],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
