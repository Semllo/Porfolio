import { Component, OnInit } from '@angular/core';
import { getClosureSafeProperty } from '@angular/core/src/util/property';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public lineChartData: Array<any>;
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };

  public color = [];

  constructor() {
    this.lineChartData = [
      [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Temperatura'}],
      [{data: [23, 79, 20, 41, 56, 25, 80], label: 'Humedad'}]
    ];
    // tslint:disable-next-line:forin
    for ( const i in this.lineChartData ) {
      this.color[i] = this.getColor();
    }
   }

  ngOnInit() {
  }

   getColor() {
     const color: Array<any> = [
        {
        backgroundColor: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.2)`,
        borderColor:  `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`,
        pointBackgroundColor:  `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor:  `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.8)`
        }
      ];
    return color;
    }
}
