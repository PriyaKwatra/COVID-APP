import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DistrictData } from './districtinfo.interface';
import { DistrictUtilsService } from './districtutils.service';

@Component({
  selector: 'app-districtinfo',
  templateUrl: './districtinfo.component.html',
  styleUrls: ['./districtinfo.component.css']
})

export class DistrictinfoComponent implements OnInit {

  districtdata;
  data: DistrictData[] = [];
  loadComponent = false;
  state;
  columnsToDisplay = ["district", "confirmed cases", "deaths", "recovered", "active"]
  constructor(private districtUtils: DistrictUtilsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const state = params['state'];
      this.state=state;
      this.districtUtils.setDistrictData(state);
      this.loadComponent = this.districtUtils.loadComponent;
      this.districtdata = this.districtUtils.districtData;
      Object.keys(this.districtdata).forEach((key) => {
        this.initialiseData(key)
      })
    });
  }

  initialiseData(key) {
    let obj: DistrictData = new DistrictData();
    obj.name = key;
    obj.active = this.districtdata[key].active;
    obj.confirmed = this.districtdata[key].confirmed;
    obj.deceased = this.districtdata[key].deceased;
    obj.recoverd = this.districtdata[key].recovered;
    this.data.push(obj);
  }

}
