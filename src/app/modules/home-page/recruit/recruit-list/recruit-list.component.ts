import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Post } from 'src/app/core/model/post/post';
import { PostService } from 'src/app/services/post/post.service';
import { RecruitService } from 'src/app/services/recruit/recruit.service';

@Component({
  selector: 'app-recruit-list',
  templateUrl: './recruit-list.component.html',
  styleUrls: ['./recruit-list.component.css']
})
export class RecruitListComponent implements OnInit {
  baseURL = Constant.BASE_URL;
  postURL = Domain.POST;
  postList: Post[] = [];

 paging={page:1, size:9, totalRecord:0}


 category='tuyển dụng';
  constructor(private recruitService:RecruitService,
              private postService:PostService
  ) {  }

  ngOnInit(): void {
    this.getListAllWithPageTest();
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





  // constructor(private postService:PostService) {
  //   this.onPageChange({ pageIndex: 0, pageSize: this.pageSize });
  // }

  // listAll():void{
  //   this.postService.listAll().subscribe(res=>{
  //     this.postList=res
  //     console.log(res)
  //   })
  // }
  // items: any[] = [];
// //   pageSize = 10;
// pageSizeOptions: number[] = [5, 10, 25, 50];
// pagedItems: any[] = [];
//   onPageChange(event: any): void {
//     const startIndex = event.pageIndex * event.pageSize;
//     this.pagedItems = this.postList.slice(startIndex, startIndex + event.pageSize);
//   }
}
