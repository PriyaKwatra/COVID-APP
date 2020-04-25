import { Component, OnInit } from '@angular/core';
import { GetService } from '../get.service';
import { DistrictUtilsService } from './districtutils.service';
import { DistrictData } from './districtinfo.interface';

@Component({
  selector: 'app-districtinfo',
  templateUrl: './districtinfo.component.html',
  styleUrls: ['./districtinfo.component.css']
})

export class DistrictinfoComponent implements OnInit {

  districtdata;
  data:DistrictData[]=[];
  loadComponent = false;
  constructor(private getService:GetService, private districtUtils:DistrictUtilsService) { }

  ngOnInit(): void {
    this.loadComponent = this.districtUtils.loadComponent;
     this.districtdata = this.districtUtils.districtData;
     Object.keys(this.districtdata).forEach((key)=>{
      let obj:DistrictData = new DistrictData();
      obj.name=key;
      obj.active=this.districtdata[key].active;  
      obj.confirmed=this.districtdata[key].confirmed;
      obj.deceased=this.districtdata[key].deceased;  
      obj.recoverd=this.districtdata[key].recoverd;    
      this.data.push(obj);
     })

     console.log(this.data);

}

}
