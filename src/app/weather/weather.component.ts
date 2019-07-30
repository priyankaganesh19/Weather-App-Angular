import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { UiService } from '../ui.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData:any;
  public position:any;
  public darkModeActive: Boolean;

  constructor(private formBuilder: FormBuilder, private apixuService:ApixuService, public ui:UiService) {
      this.weatherData = {
        'current': {
          'condition': {'text':''},
          'temp_f' : '0'
        },
        'location': {'name': 'City Name'}
      }
   }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
    /*navigator.geolocation.getCurrentPosition (response => {
      if(navigator.geolocation) {
        this.apixuService
          .getPosition(response)
          .subscribe(data => {
            debugger;
            console.log(data);
            //this.sendToAPIXU('',)
          });
      }
    });*/
  }

  sendToAPIXU(formValues,city) {
    let currentLocation = (formValues !== '') ? formValues.location : city;
    this.apixuService
        .getWeather(currentLocation)
        .subscribe(data => this.weatherData = data);
    console.log(this.weatherData);
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }
  
  /** ngAfterContentInit() {
    if(navigator.geolocation) {
      this.apixuService
        .getPosition(this.position)
        .subscribe(data => {
          console.log(data);
        });
    }
  }*/
}
