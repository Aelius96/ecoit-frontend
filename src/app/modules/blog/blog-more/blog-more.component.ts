import { Component } from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { BlogService } from 'src/app/services/blog/blog.service';
import {Cons} from "rxjs";
import {Constant} from "../../../core/config/constant";
import { Post } from 'src/app/core/model/post/post';
import { PostService } from 'src/app/services/post/post.service';
import { Domain } from 'src/app/core/domain/domain';

@Component({
  selector: 'app-blog-more',
  templateUrl: './blog-more.component.html',
  styleUrls: ['./blog-more.component.css']
})
export class BlogMoreComponent {
postURL = Domain.POST;
baseURL = Constant.BASE_URL;
postList: Post[]=[];

paging={page:1 , size:4, totalRecord:0}

category= 'blog';

constructor(private postService:PostService) {}

ngOnInit(): void {
  this.getListAllblog()
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

getListAllblog(): void {
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
