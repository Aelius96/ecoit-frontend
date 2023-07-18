import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { BlogService } from 'src/app/services/blog/blog.service';
import {PostService} from "../../../services/post/post.service";
import {Post} from "../../../core/model/post/post";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {


  postList: Post[]=[];
  page =1;
  count=0;
  pageSize= 9;
  searchInput = '';
  private totalPages: number;
  paging={page:1 , size:9 , totalRecord:0}

  category= 'blog';

  constructor(private blogService: BlogService,private postService:PostService) {}

  ngOnInit(): void {
    this.getListAllWithPageTest()
  }
  // getRequestParam(page:number){
  //   let params: any={};
  //   if (page){
  //     params[`pageNo`]=page-1;
  //   }
  // }
  //
  // getlistAllwithpage():void{
  //   const param = this.getRequestParam(this.paging.page);
  //   this.blogService.listAllWithPageHome(param).subscribe(response=>{
  //       this.blogList = response.content;
  //       this.paging.totalRecord=response.totalElements;
  //       console.log(response)
  //   },
  //   error=>{
  //     console.log(error)
  //   } )
  //
  // }
  // handlePagechange(event:number){
  //   this.page= event;
  //   this.getlistAllwithpage();
  //  }


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
