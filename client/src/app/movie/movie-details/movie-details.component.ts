import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film';
import { ServiceMovieService } from '../service-movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  Movie: Film = {
    id: 0,
    title: '',
    description: '',
    image: '',
    score: 0
  };
  comentarios: any = [];
  count:any;
  voto = {
    id: null,
    estrella1: 'null',
    estrella2: 'null',
    estrella3: 'null',
    estrella4: 'null',
    estrella5: 'null'
  }
  constructor(private movieservice: ServiceMovieService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getFilm();

    this.getcommentary();
    this.getCount();


  }

  getFilm() {
    const paramas = this.activeRoute.snapshot.params;
    this.movieservice.getFilm(paramas.id).subscribe(
      res => {
        this.Movie = res;
        this.score();
      }
    );
  }
  getcommentary() {
    const paramas = this.activeRoute.snapshot.params;
    this.movieservice.getCommentary(paramas.id).subscribe(
      res => {
        this.comentarios = res;
      }
    );
  }
  getCount() {
    const paramas = this.activeRoute.snapshot.params;
    this.movieservice.getCount(paramas.id).subscribe(
      res => {
        this.count = res;
      }
    );
  }

  score() {

    let score = Math.round(Number(this.Movie.score));
    if (score == 5) {
      this.voto.estrella1 = "null";
      this.voto.estrella2 = "null";
      this.voto.estrella3 = "null";
      this.voto.estrella4 = "null";
      this.voto.estrella5 = "5";

    } else if (score == 4) {
      this.voto.estrella1 = "null";
      this.voto.estrella2 = "null";
      this.voto.estrella3 = "null";
      this.voto.estrella4 = "4";
      this.voto.estrella5 = "null";
    } else if (score == 3) {
      this.voto.estrella1 = "null";
      this.voto.estrella2 = "null";
      this.voto.estrella3 = "3";
      this.voto.estrella4 = "null";
      this.voto.estrella5 = "null";
    } else if (score == 2) {
      this.voto.estrella1 = "null";
      this.voto.estrella2 = "2";
      this.voto.estrella3 = "null";
      this.voto.estrella4 = "null";
      this.voto.estrella5 = "null";
    } else if (score == 1) {
      this.voto.estrella1 = "1";
      this.voto.estrella2 = "null";
      this.voto.estrella3 = "null";
      this.voto.estrella4 = "null";
      this.voto.estrella5 = "null";
    } else {
      this.voto.estrella1 = "1";
      this.voto.estrella2 = "null";
      this.voto.estrella3 = "null";
      this.voto.estrella4 = "null";
      this.voto.estrella5 = "null";
    }
  }
}

