
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DistrictUtilsService {
    obj
    districtData
    loadComponent

    setDistrictData(state: string) {
        this.districtData = this.obj[state].districtData;
        this.loadComponent = true;
    }

}