import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/model/news/news';
import { NewsService } from 'src/app/services/news/news.service';
import {PostService} from "../../../services/post/post.service";
import {Post} from "../../../core/model/post/post";
import {Constant} from "../../../core/config/constant";

@Component({
  selector: 'app-news-more',
  templateUrl: './news-more.component.html',
  styleUrls: ['./news-more.component.css']
})
export class NewsMoreComponent implements OnInit {

  postList : Post[]=[]
  baseURL =  Constant.BASE_URL;

  constructor ( private postService: PostService){}
  ngOnInit(): void {
    this.getListAll()
  }

 getListAll(){
  this.postService.listAll().subscribe(data=>{
    return this.postList=data;
  })
 }



}
