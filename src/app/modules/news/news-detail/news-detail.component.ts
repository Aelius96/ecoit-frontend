import { Component } from '@angular/core';
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent {

  constructor(newsService: NewsService) {
  }
}
