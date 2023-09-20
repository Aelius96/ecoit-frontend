import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Post } from 'src/app/core/model/post/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent {
  baseURL = Constant.BASE_URL;
  url: any;
  content: any;
  postList: Post = new Post();
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.url = this.route.snapshot.params['url'];
    this.postService.getPostByUrl(this.url).subscribe((data) => {
      this.postList = data;
      document.title = this.postList.title;
      this.content = this.sanitizer.bypassSecurityTrustHtml(
        this.postList.content
      );
    });
  }
}
