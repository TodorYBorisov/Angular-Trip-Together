import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/shared/types/trip';
import { TripService } from '../trip.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  trip: Trip | undefined;
  isLoading: boolean = true;

  constructor(
    private tripService: TripService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  get isLogged(): boolean {
    return this.authService.isLogged
  }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    this.tripService.getTripbyId(id).subscribe(
      {
        next: (trip) => {
          this.trip = trip;
          this.isLoading = false;

          console.log({trip}); //провери дали идва единичен трио само от базата


        },
        error: (error) => {
          this.isLoading = false;
          console.log(`Error: ${error}`);
        }
      }
    )

  }

}
