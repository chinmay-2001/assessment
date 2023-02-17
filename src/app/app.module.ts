import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAllBookingComponent } from './list-all-booking/list-all-booking.component';
import { AddMovieBookingComponent } from './add-movie-booking/add-movie-booking.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { UpdateBookingComponent } from './update-booking/update-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    ListAllBookingComponent,
    AddMovieBookingComponent,
    UpdateBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
