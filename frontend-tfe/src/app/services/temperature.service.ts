import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TemperatureService {
  measurementsSubject = new Subject<any[]>();

  private measurements = [];

  constructor(private httpClient: HttpClient) { }

  emitMeasurementsSubject() {
    this.measurementsSubject.next(this.measurements.slice());
  }

  getTemperature(tempId: any){
    this.httpClient.get<any[]>('https://rodrigue-projects.site/temperature/'+ tempId)
    .subscribe(
      (response) => {
        this.measurements = response;
        this.emitMeasurementsSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }


}