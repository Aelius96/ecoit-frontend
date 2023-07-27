import {Component, OnInit} from '@angular/core';
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";
import {Post} from "../../../core/model/post/post";
import {PostService} from "../../../services/post/post.service";
import {Contact} from "../../../core/model/contact/contact";
import {Constant} from "../../../core/config/constant";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{
  baseURL = Constant.BASE_URL;

  postList : Post[] = [];

  paging = {
    page: 1,
    size: 9,
    totalRecord: 0
  }

  category = 'news';

  constructor(private newsService: NewsService,private postService: PostService) {
  }

  ngOnInit(): void {
    // this.getListAllWithPage();
    this.getListAllWithPageTest();

  }

  //post
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

  getListAllWithPageTest(): void {
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

  handlePageChangeTest(event: number): void {
    this.paging.page = event;
    this.getListAllWithPageTest();
  }
}
