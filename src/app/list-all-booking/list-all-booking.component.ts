import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { booking } from '../booking';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-all-booking',
  templateUrl: './list-all-booking.component.html',
  styleUrls: ['./list-all-booking.component.css']
})
export class ListAllBookingComponent implements OnInit{

  constructor(private http:HttpClient,private movieservice:MovieService,private router:Router){
  }
  list:booking[]=[]

  ngOnInit(){
    this.list=this.movieservice.getData();
  }


  ondelete(movieid:number){
    this.movieservice.ondelete(movieid);
    this.router.navigate(['/movielist'])
  }

  onupdate(){
    this.router.navigate(['/updatebooking']);
  }

}
