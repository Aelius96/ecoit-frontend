import { Component, OnInit } from '@angular/core';
import {News} from "../../../../core/model/news/news";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from "../../../../services/news/news.service";
import {TokenStorageService} from "../../../../services/token-storage/token-storage.service";
import { Recruit } from 'src/app/core/model/recruit/recruit';
import { RecruitService } from 'src/app/services/recruit/recruit.service';
import { DomSanitizer } from '@angular/platform-browser';
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
    this.getListAllWithNews();
    this.getListAllWithRecruit();
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

  getListAllWithNews() {
    const params = this.getRequestParams(this.paging.size,this.category);
    this.postService.listAllWithPageByNews(params)
      .subscribe(
        data => {
          this.postListNews = data.content;
          this.paging.totalRecord = data.totalElements;
          
        },
        error => {
          console.log(error);
        });
  }

  getListAllWithRecruit() {
    const params = this.getRequestParams(this.paging.size,this.category);
    this.postService.listAllWithPageByRecruit(params)
      .subscribe(
        data => {
          this.postListRecruit = data.content;
          this.paging.totalRecord = data.totalElements;
          
        },
        error => {
          console.log(error);
        });
  }

  }
