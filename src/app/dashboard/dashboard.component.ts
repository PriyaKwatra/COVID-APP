import { Component, OnInit, ɵConsole } from '@angular/core';
import { GetService } from '../get.service';
import { statedata } from './statedata.interface';
import { dashboard } from './dashboard.interface';
import { casesbytime } from './casesbytime.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

statedata:[statedata]
casesbytime:[casesbytime]
chartType: string = 'line';
public chartDatasets: Array<any> = [
  { data: [], label: 'Total Cases'}];
public chartLabels: Array<any> = [];
public chartColors: Array<any> = [
  {
    backgroundColor: 'rgba(105, 0, 132, .2)',
    borderColor: 'rgba(200, 99, 132, .7)',
    borderWidth: 2,
  }];

public chartOptions: any = {
  responsive: true
};

columnsToDisplay = ['state', 'confirmed cases', 'deaths', 'recovered'];
  constructor(private getservice:GetService){}

  ngOnInit(){
      this.getservice.getIndiaStatus().subscribe((obj:dashboard)=>{
       this.initialiseData(obj);
      });
  }

  initialiseData(obj:dashboard){
    this.statedata=obj.statewise;
    this.casesbytime=obj.cases_time_series;
    let size = this.casesbytime.length;
    this.chartLabels=(this.casesbytime.map(x=>x.date).splice(size-10,size-1));
    this.chartDatasets[0].data=(this.casesbytime.map(x=>x.totalconfirmed).splice(size-10,size-1));
  }

}
