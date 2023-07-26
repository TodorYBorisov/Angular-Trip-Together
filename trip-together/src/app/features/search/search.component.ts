import { Component } from '@angular/core';
import { Trip } from 'src/app/shared/interfaces/trip';
import { TripService } from '../trip.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  tripsFound!: Trip[];
  query: string = '';
  subscription$!: Subscription;
  errorMsgFromServer!: string;
  hasResult: boolean = false;

  constructor(private tripService: TripService, private authService: AuthService) { }

  get isLogged(): boolean {
    return this.authService.isLogged
  }

  onSearch(searchStr: string): void {
    this.query = searchStr;
    this.subscription$ = this.tripService.search(this.query).subscribe({
      next: (data) => {
        this.tripsFound = data;
        this.hasResult = this.tripsFound.length != 0;
      },
      error: (error) => this.errorMsgFromServer = error.error.message,
      complete: () => this.subscription$.unsubscribe(),
    })

  }


}
