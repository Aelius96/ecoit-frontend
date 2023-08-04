import {Component, OnInit} from '@angular/core';
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {PostService} from "../../../services/post/post.service";
import {Post} from "../../../core/model/post/post";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit{

  url: any;
  content:any;
  roll: any;
  post :Post = new Post();


  constructor(private postService: PostService, private route: ActivatedRoute,private sanitizer : DomSanitizer ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.url = this.route.snapshot.params['url'];
    this.postService.getPostByUrl(this.url).subscribe(data => {
      this.post = data;
      document.title = this.post.title;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.post.content);
    })
  }

}
