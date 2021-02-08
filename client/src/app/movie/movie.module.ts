import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCreatorComponent } from './movie-creator/movie-creator.component';
import { MovieVoteComponent } from './movie-vote/movie-vote.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieErrorComponent } from './movie-error/movie-error.component';


@NgModule({
  declarations: [MovieListComponent, MovieCreatorComponent, MovieVoteComponent, MovieDetailsComponent, MovieErrorComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    MovieListComponent,
    MovieCreatorComponent,
    MovieVoteComponent,
    MovieDetailsComponent,
    MovieErrorComponent
  ]
})
export class MovieModule { }
