import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Post } from 'src/app/core/model/post/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit{
  baseURL = Constant.BASE_URL;
  url: any;
  content:any;
  post :Post = new Post();

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router:Router,
              private sanitizer : DomSanitizer ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.url = this.route.snapshot.params['url'];
    // this.url = this.route.snapshot.queryParams['url'];
    this.postService.getPostByUrl(this.url).subscribe(data => {
      this.post = data;
      // console.log(data)
      document.title = this.post.title;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.post.content);
    })
  }
  searchByHashtag(tag : string) {
    this.router.navigate(["/tag/"+tag])
  }
}
