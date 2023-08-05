import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { WeatherData } from 'src/app/shared/interfaces/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private tripService: TripService) { }

  cityName: string = 'Sofia'
  weatherData?: WeatherData

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    this.tripService.getWeatherData(cityName)
      .subscribe({
        next: (responce) => {
          //console.log(responce);
          this.weatherData = responce;

        },
        error: (error) => {
          console.log(`Error: ${error}`);
        }
      });
  }

}