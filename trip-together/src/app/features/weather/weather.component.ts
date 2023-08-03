// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-weather',
//     templateUrl: './weather.component.html',
//     styleUrls: ['./weather.component.css']
// })
// export class WeatherComponent {

//     cityName: string = 'Sofia';

//     onSubmit() {
//         this.getWeatherData(this.cityName);
//         this.cityName = '';
//     }

//     //тези двете от 13/14 отива в ngOnInit

//     private getWeatherData(cityName: string) {
//         //        this.tripService.getWeatherData('cityName')
//         //       .subscribe({
//         //         next: (responce) => {
//         //           //console.log(responce);
//         //           this.weatherData = responce;

//         //         },
//         //         error: (error) => {
//         //           console.log(`Error: ${error}`);
//         //         }

//         //       })
//     }


// }


// =======================================
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

  weatherData?: WeatherData

  ngOnInit(): void {

    this.tripService.getWeatherData('Plovdiv')
      .subscribe({
        next: (responce) => {
          //console.log(responce);
          this.weatherData = responce;

        },
        error: (error) => {
          console.log(`Error: ${error}`);
        }

      })
  }

}

