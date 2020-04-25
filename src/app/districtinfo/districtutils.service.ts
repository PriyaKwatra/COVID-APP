import { districtinfo, districtData } from './districtinfo.interface';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class DistrictUtilsService{

    statesWithDistrictData:[districtinfo]


getInfoByState(state:string){
    let districtInfo:[districtData];
     this.statesWithDistrictData.forEach((info)=>{
         districtInfo = info.districtData;
    })
    return districtInfo;
}

}
