import { Component, OnInit } from '@angular/core';
import { GetService } from './get.service';
import { DistrictUtilsService } from './districtinfo/districtutils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'covid-india';
  loadComponent =false;

  constructor(private districtUtils:DistrictUtilsService){     
  }

  ngOnInit(){
      
  }

}
