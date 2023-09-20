import {Component, OnInit} from '@angular/core';
import { Domain } from 'src/app/core/domain/domain';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Post } from 'src/app/core/model/post/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{
  baseURL = Constant.BASE_URL;
  postURL = Domain.POST;
  postList : Post[] = [];

  paging = {
    page: 1,
    size: 9,
    totalRecord: 0
  }

  category = 'tin tức';

  constructor(private postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {
    // this.getListAllWithPage();
    this.getListAllWithPage();

  }

  //post
  getRequestParams(page: number, category: string): any {
    let params: any = {};
    if (page) {
      params[`pageNo`] = page;
    }
    if(category){
      params[`category`] = category;
    }
    return params;
  }

  getListAllWithPage(): void {

    const params = this.getRequestParams(this.paging.page,this.category);
    this.postService.listAllWithPageHome(params)
      .subscribe(
        response => {
          this.postList = response.content;
          this.paging.totalRecord = response.totalElements;

          // console.log(response);
          // console.log(this.category);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event: number): void {
    this.paging.page = event;
    this.getListAllWithPage();
  }
  // viewDetail(url : string) {
  //   const queryParams  = {url : url}
  //   this.router.navigate(["/tin-tuc/chi-tiet"],{queryParams})
  // }
}
