import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']})
export class NewsComponent implements OnInit {

  showLoadingSpinner = false;

  news
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.showLoadingSpinner = true;
    this.newsService.getNews().subscribe((news)=>{
         this.news=news;
         this.showLoadingSpinner = false;
    });
  }

}
