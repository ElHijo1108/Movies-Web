import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Vote } from 'src/app/models/vote';
import { UserService } from 'src/app/user/user.service';
import { ServiceMovieService } from '../service-movie.service';

@Component({
  selector: 'app-movie-vote',
  templateUrl: './movie-vote.component.html',
  styleUrls: ['./movie-vote.component.css']
})
export class MovieVoteComponent implements OnInit {
  Movie:any;
  votes :Vote={
    iduser:0,
    idfilm:0,
    score:0,
    commentary: ''
  };
  idtemporal:string='';
  user:any=null;
  text:string='';
  estrella1:any='null';
  estrella2:any='null';
  estrella3:any='null';
  estrella4:any='null';
  estrella5:any='null';

  constructor(private moviesevice :ServiceMovieService,private router :Router, private activeRoute:  ActivatedRoute, private authuservice:AuthService, private userservice :UserService) { }

  ngOnInit(): void {
    this.getFilm();
    this.verify();
    
  }
  getFilm(){
    const paramas=this.activeRoute.snapshot.params;
    this.moviesevice.getFilm(paramas.id).subscribe(
      res=>{
        this.Movie=res;
      }
    );
  }
  ActualizarEstrellas(estrella: number){
  
    if(estrella==5){
      this.estrella1="null";
      this.estrella2="null";
      this.estrella3="null";
      this.estrella4="null";
      this.estrella5="5";
    }else if(estrella==4){
      this.estrella1="null";
      this.estrella2="null";
      this.estrella3="null";
      this.estrella4="4";
      this.estrella5="null";
    }else if(estrella==3){
      this.estrella1="null";
      this.estrella2="null";
      this.estrella3="3";
      this.estrella4="null";
      this.estrella5="null";
    }else if(estrella==2){
      this.estrella1="null";
      this.estrella2="2";
      this.estrella3="null";
      this.estrella4="null";
      this.estrella5="null";
    }else if(estrella==1){
      this.estrella1="1";
      this.estrella2="null";
      this.estrella3="null";
      this.estrella4="null";
      this.estrella5="null";
    }
  }

  vote(){
    this.votes.iduser=Number(this.authuservice.getUserInformation());
    this.votes.idfilm=this.Movie.id;
    this.votes.commentary=this.text;
    if(this.estrella1=="1"){
      console.log("hola")
      this.votes.score=1;
    }else if(this.estrella2=="2"){
      this.votes.score=2;
    }else if(this.estrella3=="3"){
      this.votes.score=3;
    }else if(this.estrella4=="4"){
      this.votes.score=4;
    }else if(this.estrella5=="5"){
      this.votes.score=5;
    }
    console.log(this.votes);
    this.moviesevice.voteFilm(this.votes).subscribe(
      res=>{
        this.router.navigate(['/home']);
      }
    );
  }

  verify(){
    const paramas=this.activeRoute.snapshot.params;
    this.idtemporal=this.authuservice.getUserInformation()+'';
    this.moviesevice.verify(paramas.id,this.idtemporal).subscribe(
      res=>{
        if (res!=null){
          this.router.navigate([`/movie/error/${paramas.id}`]);
          console.log(res);
        }
      }
    );
  }
}
