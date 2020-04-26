import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetService } from './get.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTableModule} from '@angular/material/table'
import {MatCardModule} from '@angular/material/card';
import { ChartsModule, WavesModule, CheckboxModule, ButtonsModule, InputsModule, IconsModule, CardsModule } from 'angular-bootstrap-md';
import { DistrictinfoComponent } from './districtinfo/districtinfo.component'
import {DistrictUtilsService } from './districtinfo/districtutils.service';
import { RouterModule, Routes } from '@angular/router';
import { PrecautionsComponent } from './precautions/precautions.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
// MDB Angular Pro


const appRoutes:Routes =[{path:'', component:DashboardComponent },
{path:'state', component: DistrictinfoComponent},
{path:'precautions', component: PrecautionsComponent},
{path:'login', component: LoginComponent} ]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DistrictinfoComponent,
    PrecautionsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    WavesModule,
    MatTableModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    CheckboxModule, ButtonsModule, InputsModule, IconsModule, CardsModule,
  ChartsModule ],
  exports: [RouterModule],
  providers: [GetService,DistrictUtilsService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
