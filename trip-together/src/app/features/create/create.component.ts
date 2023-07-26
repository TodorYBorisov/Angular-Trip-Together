import { Component } from '@angular/core';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Trip } from 'src/app/shared/interfaces/trip';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private tripService: TripService, private router: Router, private authService: AuthService) { }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }

    //const value: { startPoint: string, endPoint: string, date: string, time: string, imageUrl: string, brand: string, seats: number, price: number, description: string } = form.value;
    const { startPoint, endPoint, date, time, imageUrl, brand, seats, price, description } = form.value;
    console.log(form.value);

    const _id = this.authService.user!._id;
    const newTrip: Trip = {...form.value, _id};

    this.tripService.createTrip(newTrip).subscribe(() => {
      this.router.navigate(['/trip/catalog'])
    });

  }

}