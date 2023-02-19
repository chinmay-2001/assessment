import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { booking } from './booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get<booking[]>(this.url)
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
    // this.http.delete<any>("http://localhost:3000/movie/2")
  }

  onUpdate(movie: any) {
    this.http.put<booking>("http://localhost:3000/movie/" + movie.id, movie).subscribe({
      next: data => { alert("movie updated successfully") }
      ,
      error: () => { alert("movie not updated successfully") }
    })
  }
}
