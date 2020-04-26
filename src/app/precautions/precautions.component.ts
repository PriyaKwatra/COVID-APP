import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {

  constructor() { }

  content:{}[] =[]

  ngOnInit(): void {
    this.content.push({src: 'handwash.png', heading: "WASH HANDS " ,detail: "Regularly clean your hands with an alcohal based hand rub or wash them with soap and water"});
    this.content.push({src: 'home.png', heading: "STAY HOME " ,detail: "If you have a fever, cough and difficulty breathing, seek medical attention and call in advance"});
    this.content.push({src: 'distance.png', heading: "MAINTAIN DISTANCE " ,detail: "Mantain atleast 2 meter distance between yourself and anyone who is coughing or sneezing"});
    this.content.push({src: 'cover.png', heading: "COVER" ,detail: "Cover your mouth and nose with your bent elbow or tissue when you cough or sneeze"});

  }

}
