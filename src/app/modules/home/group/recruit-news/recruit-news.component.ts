import { Component, OnInit } from '@angular/core';
import {News} from "../../../../core/model/news/news";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from "../../../../services/news/news.service";
import {TokenStorageService} from "../../../../services/token-storage/token-storage.service";
import { Recruit } from 'src/app/core/model/recruit/recruit';
import { RecruitService } from 'src/app/services/recruit/recruit.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-recruit-news',
  templateUrl: './recruit-news.component.html',
  styleUrls: ['./recruit-news.component.css']
})
export class RecruitNewsComponent implements OnInit{
  recruitList: Recruit[]=[];
  newsList: News[]=[];

  // url: any;
  // content:any;
  // roll: any;
  // NewsDetail :News = new News();
  constructor( private newsService: NewsService,
            
              private RecruitService: RecruitService,
              private route : ActivatedRoute,
              private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getListAllWithPage();
    this.getListAllWithPageRecruit();
   
  }

  getListAllWithPage(): void {

    this.newsService.listAll().subscribe(data=>
    {return this.newsList =data})
  }
  getListAllWithPageRecruit():void{
    this.RecruitService.listAll().subscribe(data=>
      {return this.recruitList=data})
  }


  // getListNews(){
  //   this.url = this.route.snapshot.params['url'];
  //   this.newsService.getNewsByUrl(this.url).subscribe(data => {
  //     this.NewsDetail = data;
  //     document.title = this.NewsDetail.title;
  //     this.content = this.sanitizer.bypassSecurityTrustHtml(this.NewsDetail.content);
  //   })
  // }



  }
