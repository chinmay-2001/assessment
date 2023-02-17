import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieBookingComponent } from './add-movie-booking/add-movie-booking.component';
import { ListAllBookingComponent } from './list-all-booking/list-all-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';

const routes: Routes = [
  {path:"movielist",component:ListAllBookingComponent},
  {path:"addmovie",component:AddMovieBookingComponent},
  {path:'updatebooking',component:UpdateBookingComponent},
  // {path:"",component:ListAllBookingComponent}
  {path:"",redirectTo:'/movielist',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
