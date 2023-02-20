import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { booking } from '../booking';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { MovieTestService } from '../movie-test.service';
import { reduce } from 'rxjs';
@Component({
  selector: 'app-list-all-booking',
  templateUrl: './list-all-booking.component.html',
  styleUrls: ['./list-all-booking.component.css']
})
export class ListAllBookingComponent implements OnInit{

  constructor(private http:HttpClient,private movieservice:MovieService,private router:Router,private movietestservice:MovieTestService){
  }
  list:booking[]=[]

  // ngOnInit(){
  //   this.list=this.movieservice.getData();
  // }
  ngOnInit(): void {
      this.movietestservice.getData().subscribe(event=>this.list=event)
  }


  // ondelete(movieid:number){
  //   this.movieservice.ondelete(movieid);
  //   this.router.navigate(['/movielist'])
  // }
  ondelete(movieid:number){
    this.movietestservice.ondelete(movieid);
    this.router.navigate(['/movielist'])
  }

  onupdate(){
    this.router.navigate(['/updatebooking']);
  }

}
