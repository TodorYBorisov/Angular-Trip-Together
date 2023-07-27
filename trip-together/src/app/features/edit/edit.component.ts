import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TripService } from '../trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Trip } from 'src/app/shared/interfaces/trip';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  errorMsgFromServer!: string;
  tripDetails!: Trip;
  subscription$!: Subscription;
  tripId!: string;

  constructor(
    private tripService: TripService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscription$ = this.activatedRoute.params.subscribe((params) => {

      this.tripId = params['id'];
      this.tripService.getTripbyId(this.tripId).subscribe({
        next: (data) => {
          this.tripDetails = data
        },
        error: (error) => this.errorMsgFromServer = error.error.message,
        complete: () => this.subscription$.unsubscribe(),
      });
    })

  }

  onSubmit(form: NgForm) {

    const _id = this.tripDetails.userId._id;
    const editTrip: Trip = {...form.value, _id};
    //console.log(editTrip);

    this.subscription$ = this.tripService.editTrip(this.tripId, editTrip).subscribe({
      error: (err) => this.errorMsgFromServer = err.error.message,
      complete: () => {
        this.subscription$.unsubscribe();
        this.router.navigate(['/trip', 'details', `${this.tripId}`]);
      }
    });

  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
