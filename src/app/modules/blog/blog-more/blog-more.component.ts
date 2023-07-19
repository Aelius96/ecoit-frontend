import { Component } from '@angular/core';
import { Blog } from 'src/app/core/model/blog/blog';
import { BlogService } from 'src/app/services/blog/blog.service';
import {Cons} from "rxjs";
import {Constant} from "../../../core/config/constant";

@Component({
  selector: 'app-blog-more',
  templateUrl: './blog-more.component.html',
  styleUrls: ['./blog-more.component.css']
})
export class BlogMoreComponent {


  blogList: Blog[]=[]
  baseURL = Constant.BASE_URL;

  constructor(private blogService: BlogService){}
    ngOnInit(): void {
      this.getListAll()
    }

    getListAll(){
      this.blogService.listAll().subscribe(data=>{

        return this.blogList=data;
      })
    }


}
