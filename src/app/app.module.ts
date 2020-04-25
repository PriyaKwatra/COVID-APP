import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetService } from './get.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTableModule} from '@angular/material/table'
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { DistrictinfoComponent } from './districtinfo/districtinfo.component'
import {DistrictUtilsService } from './districtinfo/districtutils.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DistrictinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    WavesModule,
    MatTableModule,
  ChartsModule ],
  providers: [GetService,DistrictUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
