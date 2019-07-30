import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

import { RouterModule } from '@angular/router';
import { allAppRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './apixu.service';
import { AgmCoreModule } from '@agm/core';
import { WeatherCardComponent } from './weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCPlqXnJXiR7O2_uQv9dmUAUDyMjZ8-jcE'}),
    HttpClientModule
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
