import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/core/model/blog/blog';
import { BlogService } from 'src/app/services/blog/blog.service';

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

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private sanitizer : DomSanitizer){}


  ngOnInit(): void {
   this.getList();
  }

  getList(){
   this.url = this.route.snapshot.params['url'];
   this.blogService.getBlogbyUrl(this.url).subscribe(data=>{
    this.blogList = data;
    document.title  = this.blogList.title;
    this.content = this.sanitizer.bypassSecurityTrustHtml(this.blogList.content)
   })
  }
}
