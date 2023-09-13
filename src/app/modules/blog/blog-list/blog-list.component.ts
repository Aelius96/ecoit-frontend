import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { BlogService } from 'src/app/services/blog/blog.service';
import {PostService} from "../../../services/post/post.service";
import {Post} from "../../../core/model/post/post";
import {Constant} from "../../../core/config/constant";
import { Domain } from 'src/app/core/domain/domain';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  postURL = Domain.POST;
  baseURL = Constant.BASE_URL;
  postList: Post[]=[];

  paging={page:1 , size:9 , totalRecord:0}

  category= 'blog';

  constructor(private postService:PostService) {}

  ngOnInit(): void {
    this.getListAllWithPageTest()
  }

  getRequestParamsTest(page: number, category: string): any {
    let params: any = {};
    if (page) {
      params[`pageNo`] = page;
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
