import { Component, OnInit } from '@angular/core';
import { GetService } from '../get.service';
import { DistrictUtilsService } from './districtutils.service';
import { districtinfo, districtData } from './districtinfo.interface';

@Component({
  selector: 'app-districtinfo',
  templateUrl: './districtinfo.component.html',
  styleUrls: ['./districtinfo.component.css']
})
export class DistrictinfoComponent implements OnInit {
  constructor(private getService:GetService, private districtUtils:DistrictUtilsService) { }

  ngOnInit(): void {
     this.getService.getDistrictStatus().subscribe((obj:{})=>{
       let i =0;
       let statesWithDistrictData:districtinfo[] = new Array(Object.keys(obj).length);

       let stateKeys:string[] = new Array(Object.keys(obj).length);
       let districtKeys:string[]
       let districtInfo:districtData[];
       
       Object.keys(obj).forEach((stateKey)=>{
       stateKeys.push(stateKey)})

       console.log(stateKeys);
       Object.values(obj).forEach((state)=>{
          Object.keys(state).forEach((districtKey)=>{
            districtKeys.push(districtKey);
           districtInfo= state[districtKey]; })
})
console.log(districtInfo);
})

  }

}
