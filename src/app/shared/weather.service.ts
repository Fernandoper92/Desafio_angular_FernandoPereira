import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl = 'https://api.hgbrasil.com/weather?format=json-cors&array_limit=2&fields=only_results,temp,city_name,date&key=8b8f9c7f&city_name='

  constructor(private http: HttpClient) { }

  getWeather(city: any, state: any) {
    return this.http.get(`${this.weatherUrl}${city},${state}`)
  }
 
}
