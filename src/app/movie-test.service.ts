import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { booking } from './booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class MovieTestService {

  url = "http://localhost:3000/movie"
  constructor(private http: HttpClient) { }
  data: any;

  getData(): Observable<booking[]> {
    return this.http.get<booking[]>(this.url).pipe(map(ev=>ev.sort((a,b)=>a.id>b.id?1:-1)))
  }

  addMovie(movie: any): Observable<booking> {
    return this.http.post<any>("http://localhost:3000/movie", movie, httpOptions)
  }

  ondelete(movieid: any) {
    this.http.delete<any>("http://localhost:3000/movie/" + movieid).subscribe({
      next: data => { alert("date deleted successfully") }
      ,
      error: () => { alert("data not deleted successfully") }
    }

    )
  }

  onUpdate(movie: any) {
    this.http.put<booking>("http://localhost:3000/movie/" + movie.id, movie).subscribe({
      next: data => { alert("movie updated successfully") }
      ,
      error: () => { alert("please give correct movieId") }
    })
  }
 
  
}
