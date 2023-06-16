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
  page =1;
  count=0;
  pageSize= 9;
  searchInput = '';
  private totalPages: number;
  paging={page:1 , size:9 , totalRecord:0}

  constructor(private blogService: BlogService) {}
  
  ngOnInit(): void {
    this.getlistAllwithpage()
  }
  getRequestParam(page:number){
    let params: any={};
    if (page){
      params[`pageNo`]=page-1;
    }
  }

  getlistAllwithpage():void{
    const param = this.getRequestParam(this.paging.page);
    this.blogService.listAllWithPageHome(param).subscribe(response=>{
        this.blogList = response.content;
        this.paging.totalRecord=response.totalElements;
        console.log(response)
    },
    error=>{
      console.log(error)
    } )

  }
  handlePagechange(event:number){
    this.page= event;
    this.getlistAllwithpage();
   }

}
