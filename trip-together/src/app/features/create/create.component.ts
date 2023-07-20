import { Component } from '@angular/core';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {


  constructor(private tripService: TripService, private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }

    const value: { startPoint: string, endPoint: string, date: string, time: string, imageUrl: string, brand: string, seats: number, price: number, description: string } = form.value;


    console.log(form.value);
    
  }

}
