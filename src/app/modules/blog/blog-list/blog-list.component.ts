import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
 
  blogList: Blog[]=[]
  constructor(private blogService: BlogService) {
  }
  ngOnInit(): void {
    this.getlistAll()
  }

  getlistAll(){
    this.blogService.listAll().subscribe(data=>{
     return this.blogList=data;
    })
  }

}
