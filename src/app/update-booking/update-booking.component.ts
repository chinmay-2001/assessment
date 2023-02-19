import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { MovieService } from '../movie.service';
import { booking } from '../booking';
import { Router } from '@angular/router';
import { MovieTestService } from '../movie-test.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent {
  constructor(private movieservice:MovieService,private router:Router,private movietestservice:MovieTestService){}

  movielist=new FormGroup({
    id:new FormControl('',Validators.compose([Validators.required,Validators.pattern("^(?:[1-9]|[1-9][0-9]|[12][0-9]{2}|300)$")])),
    moviename:new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9]{1,20}$")])),
    movieBookingDate:new FormControl('',Validators.compose([Validators.required,])),
    noOfTickets:new FormControl('',Validators.compose([Validators.required,Validators.pattern("^(1[0-5]|[0-9])$")]))
  })

  // onUpdate(movie:any){
  //   console.log("here")
  //   this.movieservice.onUpdate(movie);
  //   this.router.navigate(['/movielist'])
  // }
  onUpdate(movie:any){
    console.log("here")
    this.movietestservice.onUpdate(movie);
    this.router.navigate(['/movielist'])
  }
}
