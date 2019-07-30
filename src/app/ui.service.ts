import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  darkModeState: BehaviorSubject<Boolean>;

  constructor() { 
    this.darkModeState = new BehaviorSubject<Boolean>(false);
  }
}
