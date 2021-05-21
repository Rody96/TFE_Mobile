import { Component, OnInit } from '@angular/core';
import {TemperatureService} from '../services/temperature.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  //tempId: any = 5;
  measurements;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
      this.http.get<any[]>('https://rodrigue-projects.site/temperature/5')
    .subscribe(
      data => {
        this.measurements = data['temperature'];
    })
  
  }

}
