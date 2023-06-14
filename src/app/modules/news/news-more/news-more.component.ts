import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/model/news/news';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-more',
  templateUrl: './news-more.component.html',
  styleUrls: ['./news-more.component.css']
})
export class NewsMoreComponent implements OnInit {

  // blogList: Blog[]=[]
  // constructor(private blogService: BlogService) {
  // }
  // ngOnInit(): void {
  //   this.getlistAll()
  // }

  // getlistAll(){
  //   this.blogService.listAll().subscribe(data=>{
  //    return this.blogList=data;
  //   })
  // }

  news : News[]=[]
  constructor ( private newsService: NewsService){}
  ngOnInit(): void {
   
  }

 getListAll(){
  this.newsService.listAll().subscribe(data=>{
    return this.news=data;
  })
 }

}
