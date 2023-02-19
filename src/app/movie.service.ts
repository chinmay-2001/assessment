import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { booking } from './booking';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  url='assets/movies.json'
  movies:booking[]=[]

  
  get=-1;
  
  getData():booking[]{
    console.log(this.movies)
    return this.movies;
  }
  
  addMovie(movie:any){
    this.movies.push(movie);
  }

  ondelete(movieid:number){
    for(let i=0;i<this.movies.length;i++){
      if(movieid==this.movies[i].id){
        this.movies.splice(i,1);
      }
    }
    
  }

  onUpdate(movie:booking){
    for(let i=0;i<this.movies.length;i++){
      if(movie.id==this.movies[i].id){
          this.movies.splice(i,1)
          this.movies.push(movie)
      }
    }
  }

}
