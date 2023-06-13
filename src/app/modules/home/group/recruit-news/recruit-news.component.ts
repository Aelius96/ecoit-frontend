import { Component, OnInit } from '@angular/core';
import {News} from "../../../../core/model/news/news";
import {Router} from "@angular/router";
import {NewsService} from "../../../../services/news/news.service";
import {TokenStorageService} from "../../../../services/token-storage/token-storage.service";
import { Recruit } from 'src/app/core/model/recruit/recruit';
import { RecruitService } from 'src/app/services/recruit/recruit.service';

@Component({
  selector: 'app-recruit-news',
  templateUrl: './recruit-news.component.html',
  styleUrls: ['./recruit-news.component.css']
})
export class RecruitNewsComponent implements OnInit{
  recruitList: Recruit[]=[];
  newsList: News[]=[];
  constructor(private router:Router, private newsService: NewsService,
              private tokenStorageService: TokenStorageService,
              private RecruitService: RecruitService) {}

  ngOnInit(): void {
    this.getListAllWithPage();
    this.getListAllWithPageRecruit()

  }

  getListAllWithPage(): void {

    this.newsService.listAll().subscribe(data=>
    {return this.newsList =data})
  }
  getListAllWithPageRecruit():void{
    this.RecruitService.listAll().subscribe(data=>
      {return this.recruitList=data})
  }


  }
