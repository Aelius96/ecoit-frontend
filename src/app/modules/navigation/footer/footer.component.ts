import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/model/news/news';
import { NewsService } from 'src/app/services/news/news.service';
import {Post} from "../../../core/model/post/post";
import {PostService} from "../../../services/post/post.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

postList: Post[]=[]
constructor(private postService: PostService) {

}
  ngOnInit(): void {
    this.getList()
  }
  getList():void{
    this.postService.listAll().subscribe(data=>{
      this.postList =data;
  })
}

}

