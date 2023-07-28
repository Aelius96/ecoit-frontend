import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/model/post/post';
import { Recruit } from 'src/app/core/model/recruit/recruit';
import { PostService } from 'src/app/services/post/post.service';
import { RecruitService } from 'src/app/services/recruit/recruit.service';
import {Constant} from "../../../core/config/constant";
import { Domain } from 'src/app/core/domain/domain';

@Component({
  selector: 'app-recruit-more',
  templateUrl: './recruit-more.component.html',
  styleUrls: ['./recruit-more.component.css']
})
export class RecruitMoreComponent implements OnInit {
  postURL = Domain.POST;
  baseURL = Constant.BASE_URL;
  postList: Post[]=[];
  
  paging={page:1 , size:4, totalRecord:0}
  
  category= 'recruit';
  
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
