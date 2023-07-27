import { Component, OnDestroy, OnInit } from '@angular/core';
import { Trip } from 'src/app/shared/interfaces/trip';
import { TripService } from '../trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  trip: Trip | undefined;
  isLoading: boolean = true;
  isOwner: boolean = false;

  constructor(
    private tripService: TripService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }


  get isLogged(): boolean {
    return this.authService.isLogged
  }

  get user() {
    return this.authService.user
  }


  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    this.tripService.getTripbyId(id).subscribe(
      {
        next: (trip) => {
          this.trip = trip;
          this.isLoading = false;

          //console.log({ trip }); //провери дали идва единичен трио само от базата
        },
        error: (error) => {
          this.isLoading = false;
          console.log(`Error: ${error}`);
        },
        complete: () => {
          this.isOwner = this.authService.user?._id === this.trip?.userId._id
        }
      });
  }

  deleteTrip(): void {
    if (confirm('Are you sure you want to delete this trip?')) {
      this.tripService.deleteTripById(this.trip?._id as string, this.trip?.userId._id as string)
        .subscribe(() => this.router.navigate(['/trip/catalog']))
    }
  }
 
}
