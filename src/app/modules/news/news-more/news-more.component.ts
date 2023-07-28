import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/model/news/news';
import { NewsService } from 'src/app/services/news/news.service';
import {PostService} from "../../../services/post/post.service";
import {Post} from "../../../core/model/post/post";
import {Constant} from "../../../core/config/constant";
import { Domain } from 'src/app/core/domain/domain';

@Component({
  selector: 'app-news-more',
  templateUrl: './news-more.component.html',
  styleUrls: ['./news-more.component.css']
})
export class NewsMoreComponent implements OnInit {
  postURL = Domain.POST;
  baseURL = Constant.BASE_URL;
  postList: Post[]=[];
  
  paging={page:1 , size:4, totalRecord:0}
  
  category= 'news';
  
  constructor(private postService:PostService) {}
  
  ngOnInit(): void {
    this.getListAllnewsMore()
  }
  
  getRequestParamsTest(page: number, category: string): any {
    let params: any = {};
    if (page) {
      params[`pageNo`] = page-1;
    }
    if(category){
      params[`category`] = category;
    }
    return params;
  }
  getListAllnewsMore(): void {
    const params = this.getRequestParamsTest(this.paging.page,this.category);
    this.postService.listAllWithPageHome(params)
      .subscribe(
        response => {
          this.postList = response.content;
          this.paging.totalRecord = response.totalElements;
  
          console.log(response);
          console.log(this.category);
        },
        error => {
          console.log(error);
        });
  }
}
