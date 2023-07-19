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
  page = 1;
 count = 0;
 pageSize= 5;
 searchInput = '';
totalPages: number;
 paging={page:1, size:5, totalRecord:0}
  postList: Post[] = [];
 category='recruit';
  constructor(private recruitService:RecruitService,
              private postService:PostService
  ) { }


  ngOnInit(): void {
    this.getListAllWithPageTest();
  }
  // getRequestParam(page:number):any{
  //   let params :any={};
  //   if (page){
  //     params[`pageNo`]= page-1;
  //   }
  // }
  //
  // getAllListwithPage():void{
  //   const param = this.getRequestParam(this.paging.page);
  //     this.recruitService.listAllWithPageHome(param).subscribe(response=>{
  //         this.recruitList=response.content;
  //         this.paging.totalRecord=response.totalElements;
  //
  //         console.log(response)
  //     },
  //     error=>{
  //       console.log(error)
  //     } )
  //  }
  //
  //  handlePagechange(event:number){
  //   this.page= event;
  //   this.getAllListwithPage();
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

