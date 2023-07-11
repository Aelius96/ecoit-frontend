import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/core/model/blog/blog';
import { BlogService } from 'src/app/services/blog/blog.service';
import {PostService} from "../../../services/post/post.service";
import {Post} from "../../../core/model/post/post";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {

  url: any;
  content:any;
  roll:any;
  blogList: Blog= new Blog();
  postList: Post = new Post();
  constructor(private blogService: BlogService,
              private postService: PostService,
              private route: ActivatedRoute,
              private sanitizer : DomSanitizer){}


  ngOnInit(): void {
   this.getList();
  }

  getList(){
   this.url = this.route.snapshot.params['url'];
   this.postService.getPostByUrl(this.url).subscribe(data=>{
    this.postList = data;
    document.title  = this.postList.title;
    this.content = this.sanitizer.bypassSecurityTrustHtml(this.postList.content)
   })
  }
}
