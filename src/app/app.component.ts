import { Component, OnInit } from '@angular/core';
import { GetService } from './get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'covid-india';

  constructor(){}

  ngOnInit(){
      
  }
}
