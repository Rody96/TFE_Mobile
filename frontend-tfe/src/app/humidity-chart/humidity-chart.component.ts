import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import {HumidityService} from '../services/humidity.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-humidity-chart',
  templateUrl: './humidity-chart.component.html',
  styleUrls: ['./humidity-chart.component.scss']
})
export class HumidityChartComponent implements OnInit {

  @ViewChild("humidityChart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  measurements = [22,23,24,25,26,27,28,29,30];
  homepageSubscription: Subscription;

  constructor(private humidityService: HumidityService) {
    this.getHum();
    console.log("HUM"+ this.measurements)
  }

  ngOnInit(): void {
    this.homepageSubscription = this.humidityService.measurementsSubject.subscribe(
      (humidityMeasurements: any[]) => {
        //this.measurements = humidityMeasurements;
      }
    );
    
    this.humidityService.emitMeasurementsSubject();

    this.chartOptions = {
      series: [
        {
          name: "humidity",
          data: this.measurements
        }
      ],
      chart: {
        height: 450,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Humidity",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };
    //console.log(this.measurements)
  }

  getHum(){
    this.humidityService.getHumValues();
  }

}
