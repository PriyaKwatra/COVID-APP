import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class GetService {
    title = 'covid-india';


public constructor(private httpclient:HttpClient){


}

getIndiaStatus(){
return this.httpclient.get("https://api.covid19india.org/data.json")
}

getDistrictStatus(){
  return this.httpclient.get("https://api.covid19india.org/state_district_wise.json")
}

 }