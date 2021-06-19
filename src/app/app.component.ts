import { Component } from '@angular/core';
import { StatesService } from './shared/states.service';
import { WeatherService } from './shared/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stateslist: any;
 textBoxValue = '';
 selectBoxValue = '';
 textAreaValue = '';

 constructor(
   private statesService: StatesService,
   private weatherService: WeatherService
   ) {}

 ngOnInit(): any {
   this.getStates();
 }

 getStates() {
  this.stateslist = this.statesService.getStates();
 }

 getWeather(city: string, state: string) {
   console.log(city,state);
   this.weatherService.getWeather(city,state).subscribe((data) => {
    let weatherValue: any = data;
    weatherValue = weatherValue.temp + '°C';
    this.textAreaValue = weatherValue;
   });
 }
}