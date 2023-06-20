import { Component } from '@angular/core';
import {News} from "../../../../core/model/news/news";
import {Router} from "@angular/router";
import {NewsService} from "../../../../services/news/news.service";
import {TokenStorageService} from "../../../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-recruit-news',
  templateUrl: './recruit-news.component.html',
  styleUrls: ['./recruit-news.component.css']
})
export class RecruitNewsComponent {

  newsList: News[]=[];
  role: string;
  constructor(private router:Router, private newsService: NewsService,
              private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.getListAllWithPage();

  }

  getListAllWithPage(): void {

    this.newsService.listAll().subscribe(data=>
    {return this.newsList =data})
  }


}
