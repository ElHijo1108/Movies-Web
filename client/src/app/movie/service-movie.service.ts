import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Vote } from '../models/vote';
@Injectable({
  providedIn: 'root'
})
export class ServiceMovieService {
  API_URI='http://localhost:3000/api'
  constructor(private http: HttpClient) { }


  getFilms(){
    return this.http.get(`${this.API_URI}/films`);
  }
  getFilm(id: string){
    return this.http.get(`${this.API_URI}/films/${id}`);
  }

  voteFilm(vote: Vote){
    return this.http.post(`${this.API_URI}/votes`,vote);
  }
  
  verify(idfilm:string,iduser:string){
    return this.http.get(`${this.API_URI}/votes/${idfilm}/${iduser}`);
  }

  getCommentary(id: string){
    return this.http.get(`${this.API_URI}/films/commentary/${id}`);
  }
  getCount(id: string){
    return this.http.get(`${this.API_URI}/films/count/${id}`);
  }
}
