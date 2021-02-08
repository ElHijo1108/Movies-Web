import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ServiceMovieService } from '../service-movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @HostBinding('class') clasees = 'row';
  Movies: any = [];
  userLogged: boolean=false;
  
  votos:any=[];

  idu: any = null;
  constructor(private servicemovie: ServiceMovieService, private authservice: AuthService) { }

  ngOnInit(): void {
    this.showMenu();
    this.getFilms();
    this.idu = this.authservice.getUserInformation();
    console.log(this.votos);
  }

  showMenu(){
    let userInfo=this.authservice.getToken();
    if(userInfo==null){
      this.userLogged=false;
    }else{
      this.userLogged=true;
    }
  }



  getFilms() {

    this.servicemovie.getFilms().subscribe(
      res => {
        this.Movies = res;
        this.score();
      },
      err => console.error(err)
    );

  }
  score() {
    for (let entry of this.Movies) {
      let voto = {
        id:null,
        estrella1:'null',
        estrella2:'null',
        estrella3:'null',
        estrella4:'null',
        estrella5:'null'
      };

      voto.id=entry.id;
      let score=Math.round(entry.score);
      if(score==5){
        voto.estrella1="null";
        voto.estrella2="null";
        voto.estrella3="null";
        voto.estrella4="null";
        voto.estrella5="5";

      }else if(score==4){
        voto.estrella1="null";
        voto.estrella2="null";
        voto.estrella3="null";
        voto.estrella4="4";
        voto.estrella5="null";
      }else if(score==3){
        voto.estrella1="null";
        voto.estrella2="null";
        voto.estrella3="3";
        voto.estrella4="null";
        voto.estrella5="null";
      }else if(score==2){
        voto.estrella1="null";
        voto.estrella2="2";
        voto.estrella3="null";
        voto.estrella4="null";
        voto.estrella5="null";
      }else if(score==1){
        voto.estrella1="1";
        voto.estrella2="null";
        voto.estrella3="null";
        voto.estrella4="null";
        voto.estrella5="null";
      }else{
        voto.estrella1="1";
        voto.estrella2="null";
        voto.estrella3="null";
        voto.estrella4="null";
        voto.estrella5="null";
      }
      this.votos.push(voto);
    }
  }

}
