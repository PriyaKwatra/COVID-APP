import { formatDate, registerLocaleData } from '@angular/common';
import localeHi from '@angular/common/locales/hi';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { NewsService } from '../news/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  newsForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(private newsService: NewsService, private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {

    if (!this.loginService.loggedIn) {
      this.route.navigate([""]);
    }
  }

  onSubmit() {
    let now = new Date();
    registerLocaleData(localeHi, 'hi');
    let fomattedDate = formatDate(now, 'dd-MM-yyyy hh:mm:ss a', 'hi', 'UTC+4');
    this.newsService.addNews({
      title: this.newsForm.value.title,
      content: this.newsForm.value.description,
      date: fomattedDate,
      id: fomattedDate
    }).subscribe(()=>{window.location.reload();});
   
  }

}
