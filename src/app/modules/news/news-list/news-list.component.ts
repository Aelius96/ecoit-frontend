import {Component, OnInit} from '@angular/core';
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";
import {Post} from "../../../core/model/post/post";
import {PostService} from "../../../services/post/post.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{

  newsList : News[] = [];

  postList : Post[] = [];

  page = 1;
  count = 0;
  pageSize = 9;
  searchInput = '';
  totalPages: number;
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

  // public listAll(){
  //   this.newsService.listAll().subscribe(data =>{
  //     this.newsList = data;
  //   })
  // }

  // getRequestParams(page: number): any {
  //   let params: any = {};
  //   if (page) {
  //     params[`pageNo`] = page-1;
  //   }
  // }
  //
  // getListAllWithPage(): void {
  //   const params = this.getRequestParams(this.paging.page);
  //   this.newsService.listAllWithPageHome(params)
  //     .subscribe(
  //       response => {
  //         this.newsList = response.content;
  //         this.paging.totalRecord = response.totalElements;
  //
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  //
  //
  //
  //
  // handlePageChange(event: number): void {
  //   this.page = event;
  //   this.getListAllWithPage();
  // }


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
