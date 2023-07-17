import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Trip } from '../shared/types/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  //така дърпаме всички trips от апи-то
  getAllTrips() {
    const { appUrl } = environment;
    return this.http.get<Trip[]>(`${appUrl}/trips`);
  }


  //така дърпаме единична тема по нейното id 
  getTripbyId(id: string) {
    const { appUrl } = environment;
    return this.http.get<Trip>(`${appUrl}/trips/details/${id}`);
  }

}
