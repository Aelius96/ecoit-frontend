import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Post } from 'src/app/core/model/post/post';
import { PostService } from 'src/app/services/post/post.service';

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
