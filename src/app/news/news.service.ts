import { Injectable } from '@angular/core';
import { formatDate, registerLocaleData } from '@angular/common';
import localeHi from '@angular/common/locales/hi';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class NewsService {
    news: {}[];
    constructor(private httpclient:HttpClient) {
    }

    initialiseData() {

    }

    getNews(){
        return this.httpclient.get("https://priya-kwatra.herokuapp.com/news");
    }

    addNews(news: {}) {
        return this.httpclient.post("https://priya-kwatra.herokuapp.com/news",news)};

}  