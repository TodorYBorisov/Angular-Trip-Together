import { Component, OnDestroy, OnInit } from '@angular/core';
import { Trip } from 'src/app/shared/interfaces/trip';
import { TripService } from '../trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  trip: Trip | undefined;
  isLoading: boolean = true;
  isOwner: boolean = false;
  seatsLeft: number = 0;
  isSubcribe: boolean = false;
  hasJoined: boolean = false

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

  hasAvailableSeats(): boolean {
    this.seatsLeft = this.trip?.seats || 0
    return this.seatsLeft > 0
  }

  addBuddy(): void {
    const userId = this.trip?.userId?._id as string;

    if (this.trip?.buddies.some(user => user._id == this.user?._id)) {
      this.hasJoined = true;
      this.isSubcribe = true
      return;
    }

    this.tripService.addBuddieToTrip(this.trip?._id as string, { userId })
      .subscribe({
        next: (data) => {
          this.hasJoined = true;
          this.isSubcribe = true
          this.trip!.buddies =data.buddies
          //this.router.navigate([`/trip/details/${this.trip?._id}`])
        },
        error: (error) => {
          this.isSubcribe = false
          console.log(`Error: ${error}`);
        }

      });

  }

}


// {
//   "buddies": [],
//   "_id": "64c7cf12b197ec3ef8749ea0",
//   "startPoint": "Sofia",
//   "endPoint": "Varna",
//   "date": "2023-08-01",
//   "time": "15:00",
//   "imageUrl": "https://media.ed.edmunds-media.com/hyundai/kona/2022/oem/2022_hyundai_kona_4dr-suv_limited_fq_oem_1_600.jpg",
//   "brand": "Hyundai Kona",
//   "seats": 2,
//   "price": 35,
//   "description": "This is trip from sofia to varna",
//   "userId": {
//     "trips": [
//       "64c7cf12b197ec3ef8749ea0"
//     ],
//     "_id": "64bfaa91c2cdeb30e8e2a6a5",
//     "username": "Toshko",
//     "email": "toshko@abv.bg",
//     "tel": "+359884400839",
//     "gender": "male",
//     "password": "$2b$05$z1lUSgJE1wYDh3FRyk3gJuraUrtOjJ3023UOg/bsscI2lUpITbNWe",
//     "created_at": "2023-07-25T10:57:21.640Z",
//     "updatedAt": "2023-08-01T09:12:33.985Z",
//     "__v": 0
//   },
//   "created_at": "2023-07-31T15:11:14.919Z",
//   "updatedAt": "2023-08-03T17:22:01.368Z",
//   "__v": 3
// }