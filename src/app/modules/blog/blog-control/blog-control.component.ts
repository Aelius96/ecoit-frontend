import { Component, OnInit } from '@angular/core';
import {NumberService} from "../../../services/number-typical/number.service";
import { Router, Params } from '@angular/router';
import {Blog} from "../../../core/model/blog/blog";
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-control',
  templateUrl: './blog-control.component.html',
  styleUrls: ['./blog-control.component.css']
})
export class BlogControlComponent implements OnInit {
 

  blogList : Blog[]=[];

  constructor( private blogService: BlogService, 
                private router:Router) {
  }


ngOnInit(): void {
  this.listAll();
}

 listAll(){
    this.blogService.listAll().subscribe(data=>{
          return this.blogList=data
        }
    )
  }


updateBlog(id:number){
  return this.router.navigate([`/admin/blog/update/${id}`])
}
deleteBlog(id:number){
  let option=confirm("Bạn có muốn xóa không");
  if(option){
    this.blogService.deleteBlog(id).subscribe(data=>{
      this.listAll();
    })
  }
}

}
