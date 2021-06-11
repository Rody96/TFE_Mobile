import { Component, OnInit } from '@angular/core';
import {TemperatureService} from '../services/temperature.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  //tempId: any = 5;
  measurements: any[];
  homepageSubscription: Subscription;
  
  constructor(private temperatureService: TemperatureService) { }

  ngOnInit() {
    this.getTemp();
    this.homepageSubscription = this.temperatureService.measurementsSubject.subscribe(
      (measurements: any[]) => {
        this.measurements = measurements;
      }
    );
    this.temperatureService.emitMeasurementsSubject();
  }

  getTemp(){
    this.temperatureService.getTempValues();
  }

}
