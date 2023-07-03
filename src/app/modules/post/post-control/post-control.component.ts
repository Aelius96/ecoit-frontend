import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {Post} from "../../../core/model/post/post";
import {PostService} from "../../../services/post/post.service";


@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css']
})
export class PostControlComponent implements OnInit{
  postList: Post[]=[];
  role:string;

  searchInput= '';

  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }

  constructor(private router:Router,
              private postService: PostService) {}


  ngOnInit(): void {
    // this.listAll();
    this.getListAllWithPage();
  }

  getRequestParams(page: number, pageSize: number,search:string): any {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page-1;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if(search){
      params[`search`] = search;
    }
    return params;
  }

  getListAllWithPage() {
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput);
    this.postService.listAllWithPage(params)
      .subscribe(
        data => {
          this.postList = data.content;
          this.paging.totalRecord = data.totalElements;
        },
        error => {
          console.log(error);
        });
  }
  listAll(){
    this.postService.listAll().subscribe(data=>{
      this.postList = data;
    })
  }

  searchTitleAndDescription(): void {
    this.paging.page = 1;
    this.getListAllWithPage();
  }
  handlePageChange(event: number): void {
    console.log(event);
    this.paging.page = event;
    this.getListAllWithPage();
  }
  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    console.log(event, this.paging.size)
    this.getListAllWithPage();
  }

  updatePost(id: number){
    return this.router.navigate([`/admin/bpost/update`,id]);
  }

  deletePost(id: number){
    let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");

    if(option){
      this.postService.deletePost(id).subscribe(()=>{
        this.getListAllWithPage();
      })
    }
  }

}
