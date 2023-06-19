import { Component, OnInit } from '@angular/core';
import {NumberService} from "../../../services/number-typical/number.service";
import { Router, Params } from '@angular/router';
import {Blog} from "../../../core/model/blog/blog";
import { BlogService } from 'src/app/services/blog/blog.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-blog-control',
  templateUrl: './blog-control.component.html',
  styleUrls: ['./blog-control.component.css']
})
export class BlogControlComponent implements OnInit {
 

  blogList : Blog[]=[];
  totalPages:number;
  searchInput= '';
  currentIndex = -1;
  role:string;

  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }
  constructor( private blogService: BlogService, 
                private router:Router ,
                private tokenstorageService: TokenStorageService) {
  }


ngOnInit(): void {
  const  user = this.tokenstorageService.getUser()
  this.role =user.roles
  this.listAll();
}

getrequestparams(page:number, pagesize: number , search :string):any{

    let params: any = {};

    if (page) {
      params[`pageNo`] = page-1;
    }

    if (pagesize) {
      params[`pageSize`] = pagesize;
    }

    if(search){
      params[`search`] = search;
    }
    return params;
  }


 listAll(){

    const params = this.getrequestparams(this.paging.page , this.paging.size , this.searchInput );
    this.blogService.listAllWithPage(params).subscribe(data=>{
      this.blogList = data.content;
      this.paging.totalRecord = data.totalElements;
      this.totalPages = data.totalPages;
    },
    error => {console.error(error);
    }    
    )
  }

  searchTitleAndDescription(): void {
    this.paging.page = 1;
    this.listAll();
  }
  handlePage(event: number): void {
    console.log(event);
    this.paging.page = event;
    this.listAll();
  }
  handlePageSize(event:any):void{
      this.paging.size =event;
      this.paging.page=1;
      console.log(event, this.paging.size)
      this.listAll()
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
