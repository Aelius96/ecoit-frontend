import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {Post} from "../../../core/model/post/post";
import {PostService} from "../../../services/post/post.service";
import { Constant } from 'src/app/core/config/constant';

@Component({
  selector: 'app-recruit-detail',
  templateUrl: './recruit-detail.component.html',
  styleUrls: ['./recruit-detail.component.css']
})
export class RecruitDetailComponent implements OnInit {
  baseURL = Constant.BASE_URL;
  url: any;
  content:any;
  post: Post = new Post();
  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private sanitizer : DomSanitizer){}

  ngOnInit(): void {
   this.getList();
  }

  getList(){
    this.url= this.route.snapshot.params['url'];
    this.postService.getPostByUrl(this.url).subscribe(data=>{
      this.post=data;
      document.title = this.post.title;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.post.content);
    })
  }
}
