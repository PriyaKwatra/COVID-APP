
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DistrictUtilsService {
    obj
    districtData
    loadComponent

    setDistrictData(state: string) {
        console.log(this.obj);
        this.districtData = this.obj[state].districtData;
        this.loadComponent = true;
    }

}