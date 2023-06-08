import {Component, OnInit} from '@angular/core';
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit{

  url: any;
  content:any;
  roll: any;
  news :News = new News();

  constructor(private newsService: NewsService, private route: ActivatedRoute,private sanitizer : DomSanitizer ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.url = this.route.snapshot.params['url'];
    this.newsService.getNewsByUrl(this.url).subscribe(data => {
      this.news = data;
      document.title = this.news.title;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.news.content);
    })
  }

}
