import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  public apiKey = 'AIzaSyCPlqXnJXiR7O2_uQv9dmUAUDyMjZ8-jcE';

  constructor(private http:HttpClient) { }

  getWeather(location) {
    return this.http.get(
      'https://api.apixu.com/v1/current.json?key=b4b63b9ccc4340c091d225929191607&q='+location
    );
  }

  getPosition(pos) {
      return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+pos.coords.latitude+","+pos.coords.longitude+"&sensor=true&key="+this.apiKey);
  }
}
