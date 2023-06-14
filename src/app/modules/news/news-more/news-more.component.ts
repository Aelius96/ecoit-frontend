import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/model/news/news';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-more',
  templateUrl: './news-more.component.html',
  styleUrls: ['./news-more.component.css']
})
export class NewsMoreComponent implements OnInit {

  newsList : News[]=[]
  
  constructor ( private newsService: NewsService){}
  ngOnInit(): void {
    this.getListAll()
  }

 getListAll(){
  this.newsService.listAll().subscribe(data=>{
    return this.newsList=data;
  })
 }

}
