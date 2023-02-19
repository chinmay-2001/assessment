import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { MovieService } from '../movie.service';
import { booking } from '../booking';

import { Router } from '@angular/router';
import { MovieTestService } from '../movie-test.service';

@Component({
  selector: 'app-add-movie-booking',
  templateUrl: './add-movie-booking.component.html',
  styleUrls: ['./add-movie-booking.component.css']
})
export class AddMovieBookingComponent {

  constructor(private movieservice:MovieService,private router:Router,private movietestservice:MovieTestService){}
  movielist=new FormGroup({
    id:new FormControl('',Validators.compose([Validators.required,Validators.pattern("^(?:[1-9]|[1-9][0-9]|[12][0-9]{2}|300)$")])),
    moviename:new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9]{1,20}$")])) ,
    movieBookingDate:new FormControl('',Validators.compose([Validators.required,])),
    noOfTickets:new FormControl('',Validators.compose([Validators.required,Validators.pattern("^(1[0-5]|[0-9])$")]))
  })
  

  // addmovie(movielist:any){
  //   this.movieservice.addMovie(movielist);
  //   this.router.navigate(['/movielist']);
  // }
  addmovie(movielist:any){
    console.log(typeof(movielist))
    this.movietestservice.addMovie(movielist).subscribe({
      next:(res)=>{
        alert("data added successfully")
      },
      error:()=>{
        alert("error while adding the data")
      }
    });
    this.router.navigate(['/movielist']);
  }
}
