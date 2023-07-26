import { Component, OnInit } from '@angular/core';
import { Recruit } from '../../../core/model/recruit/recruit';
import { RecruitService } from 'src/app/services/recruit/recruit.service';
import { Params } from '@angular/router';
import {Post} from "../../../core/model/post/post";
import {PostService} from "../../../services/post/post.service";
import {Constant} from "../../../core/config/constant";

@Component({
  selector: 'app-recruit-list',
  templateUrl: './recruit-list.component.html',
  styleUrls: ['./recruit-list.component.css']
})
export class RecruitListComponent implements OnInit {
  baseURL = Constant.BASE_URL;
  recruitList: Recruit [] = [];
  postList: Post[] = [];


totalPages: number;
 paging={page:1, size:9, totalRecord:0}


 category='recruit';
  constructor(private recruitService:RecruitService,
              private postService:PostService
  ) {  }

  ngOnInit(): void {
    this.getListAllWithPageTest();
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
