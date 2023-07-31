import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Trip } from 'src/app/shared/interfaces/trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  tripList: Trip[] = [];

  isLoading: boolean = true;

  thereAreNoTtrips: boolean = false // ако нямаме пътувания

  constructor(private authService: AuthService, private tripService: TripService) { }

  get isLogged(): boolean {
    return this.authService.isLogged
  }

  ngOnInit(): void {
    this.tripService.getAllTrips().subscribe(
      {
        next: (trips) => {
          this.tripList = trips;
          this.isLoading = false

          if (this.tripList.length === 0) { //правим проверка за броя на темите
            this.thereAreNoTtrips = true;
          }
          //console.log(this.tripList);
          
        },
        error: (error) => {
          this.isLoading = false,
            console.log(`Error: ${error}`);
        }
      });
  }
}
