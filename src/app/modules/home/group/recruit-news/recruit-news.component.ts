import { Component, OnInit } from '@angular/core';
import { Recruit } from 'src/app/core/model/recruit/recruit';
import {PostService} from "../../../../services/post/post.service";
import {Post} from "../../../../core/model/post/post";
import {Constant} from "../../../../core/config/constant";
import { Domain } from 'src/app/core/domain/domain';

@Component({
  selector: 'app-recruit-news',
  templateUrl: './recruit-news.component.html',
  styleUrls: ['./recruit-news.component.css']
})
export class RecruitNewsComponent implements OnInit{
  recruitList: Recruit[]=[];
  postListNews: Post[]=[];
  postListRecruit: Post[]=[];
  postURL = Domain.POST
  paging = {
    page: 1,
    size: 3,
    totalRecord: 0
  }
  baseURL = Constant.BASE_URL;
  category: any;
  constructor(
              private postService: PostService,
             ) {}

  ngOnInit(): void {
    this.getListAllNews();
    this.getListAllRecruit();
  }

  getRequestParams(pageSize: number, category:string): any {
    let params: any = {};
    if (pageSize) {
      params[`pageSize`] = pageSize;
    }
    if(category){
      params[`category`] = category;
    }
    return params;
  }

  getListAllRecruit(){
    this.category = "tuyển dụng";
    const params = this.getRequestParams(this.paging.size,this.category);
    this.postService.listAllWithPageHome(params).subscribe(data=>{
      this.postListRecruit = data.content;
      this.paging.totalRecord = data.totalElements;
      console.log(this.postListRecruit)
    })
  }

  getListAllNews(){
    this.category = "Tin Tức";
    const params = this.getRequestParams(this.paging.size,this.category);
    this.postService.listAllWithPageHome(params).subscribe(data=>{
      this.postListNews = data.content;
      this.paging.totalRecord = data.totalElements;
      console.log(this.postListNews)
    })
  }


  }
