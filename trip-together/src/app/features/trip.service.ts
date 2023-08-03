import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Trip } from '../shared/interfaces/trip';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { WeatherData } from '../shared/interfaces/weather';
import { WEATHER_API } from '../shared/constants';
import { User } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  get user() {
    return this.authService.user
  }

  // private errorHandler(error: HttpErrorResponse): Observable<any> {
  //   console.error('Error occurred!');
  //   return throwError(error);
  // }

  //така дърпаме всички trips от апи-то
  getAllTrips() {
    const { apiUrl } = environment;
    return this.http.get<Trip[]>(`${apiUrl}/trips`);
  }


  //така дърпаме единична тема по нейното id 
  getTripbyId(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Trip>(`${apiUrl}/trips/details/${id}`);
  }

  createTrip(trip: Trip) {
    const { apiUrl } = environment;
    return this.http.post<Trip>(`${apiUrl}/trips`, trip);
  }

  search(searchTerm: string): Observable<Trip[]> {
    const { apiUrl } = environment;
    return this.http.get<Trip[]>(`${apiUrl}/trips/search/${searchTerm}`)
  }

  getUserTrips(userId: string) {
    const { apiUrl } = environment;
    return this.http.get<Trip[]>(`${apiUrl}/trips/${userId}`)
  }

  deleteTripById(tripId: string, userId: string): Observable<Trip> {
    const { apiUrl } = environment;
    return this.http.delete<Trip>(`${apiUrl}/trips/delete/${tripId}/${userId}`)
  }

  editTrip(tripId: string, data: Trip): Observable<Trip> {
    const { apiUrl } = environment;
    return this.http.put<Trip>(`${apiUrl}/trips/edit/${tripId}`, data)
  }

  // joinToTrip(tripId: string, userId: string): Observable<Trip> {
  //   return this.http.put<Trip>(`/api/trips/details/${tripId}`, userId);
  // } 

  //това работи
  addBuddieToTrip(tripId: string, data: { userId: string }): Observable<Trip>{
    return this.http.put<Trip>(`/api/trips/details/${tripId}`, data);
  }

  // addBuddieToTrip(tripId: string, data: { userId: string }): Observable<Trip>{
  //   return this.http.put<Trip>(`/api/trips/details/${tripId}`, {buddies:[{userId: data.userId}]});
  // }


  // getWeatherData(cityName:string){
  //   return this.http.get(environment.weatherApiBaseUrl, {
  //     headers: new HttpHeaders()
  //     .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
  //     .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
  //     params: new HttpParams()
  //     .set('q', cityName)
  //     .set('units', 'metric')
  //     .set('mode', 'json')
  //   })
  // }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(WEATHER_API.weatherApiBaseUrl + '/city/' + cityName, {
      headers: new HttpHeaders()
        .set(WEATHER_API.XRapidAPIHostHeaderName, WEATHER_API.XRapidAPIHostHeaderValue)
        .set(WEATHER_API.XRapidAPIKeyHeaderName, WEATHER_API.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    });
  }


}
