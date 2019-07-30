import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  public apiKey = 'use_your_own_key';
  public apiXuKey = 'use_own_key';

  constructor(private http:HttpClient) { }

  getWeather(location) {
    return this.http.get(
      'https://api.apixu.com/v1/current.json?key='+this.apiXuKey+'&q='+location
    );
  }

  getPosition(pos) {
      return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+pos.coords.latitude+","+pos.coords.longitude+"&sensor=true&key="+this.apiKey);
  }
}
