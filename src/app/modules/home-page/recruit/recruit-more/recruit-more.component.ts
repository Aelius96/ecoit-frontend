import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/model/post/post';
import { PostService } from 'src/app/services/post/post.service';
import { Domain } from 'src/app/core/domain/domain';
import { Constant } from 'src/app/core/config/constant';

@Component({
  selector: 'app-recruit-more',
  templateUrl: './recruit-more.component.html',
  styleUrls: ['./recruit-more.component.css']
})
export class RecruitMoreComponent implements OnInit {
  postURL = Domain.POST;
  baseURL = Constant.BASE_URL;
  postList: Post[]=[];
  paging={page:1 , size:4, totalRecord:0}
  
  category:any;
  
  constructor(private postService:PostService) {}
  
  ngOnInit(): void {
    this.getListAllRecruit()
  }
  
 
  getRequestParams(pageSize: number, category:string): any {
    let params: any = {};
    if (pageSize) {
      params[`pageSize`] = pageSize;
    }
    if(category){
      params[`category`] = category;
    }
    return params;
  }

  getListAllRecruit(){
    this.category = "tuyển dụng";
    const params = this.getRequestParams(this.paging.size,this.category);
    this.postService.listAllWithPageHome(params).subscribe(data=>{
      this.postList = data.content;
      this.paging.totalRecord = data.totalElements;
      console.log(this.postList)
    })
  }


}
