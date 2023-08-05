import {Component, EventEmitter, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../../core/model/post/post";
import {PostService} from "../../../services/post/post.service";
import { Category } from 'src/app/core/model/category/category';
import {Constant} from "../../../core/config/constant";
import { HttpParams } from '@angular/common/http';
import { CategoryService } from 'src/app/services/category/category.service';
import {DomSanitizer} from "@angular/platform-browser";
import {Domain} from "../../../core/domain/domain";


@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css']
})
export class PostControlComponent implements OnInit{

  postList: Post[]=[];
  catelist: Category[]=[];

  baseURL = Constant.BASE_URL;
  postURL = Domain.POST;
  role:string;
  Filter:false;
  searchInput= '';
  imageUrl :any;
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }
  cate = '';

  constructor(private router:Router,
              private route: ActivatedRoute,
              private postService: PostService ,
              private cateService: CategoryService
  ) {
  }


  ngOnInit(): void {
    // this.listAll();
    this.getListAllWithPage();
    this.listAllCate();

  }

  getRequestParams(page: number, pageSize: number,search:string, cate:string): any {
    debugger;
    let params: any = {};

    if (page) {
      params[`pageNo`] = page;
    }
    
    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if(search){
      params[`search`] = search;
    }

    if(cate){
      // params[`cate`] = cate;
      params.cate=cate
    }
    return params;
  }

  getListAllWithPage() {
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput, this.cate);

    // this.router.navigate(['admin/bpost'], { queryParams: params });

    this.postService.listAllWithPage(params)
      .subscribe(
        data => {
          this.postList = data.content;
          this.paging.totalRecord = data.totalElements;

          // history.pushState(URL `admin/bpost?pageNo=${a.paging.page}&pageSize=${a.paging.size}`)
         console.log(this.postList)

        },
        error => {
          console.log(error);
        });

  }

  // getImageByPostId(){
  //   this.postService.getImageByPostId(this.postId).subscribe(data =>{
  //     this.image = data.id;
  //     }
  //   )
  // }

  listAll(){
    this.postService.listAll().subscribe(data=>{
      this.postList = data;
    })
  }

  listAllCate(){
    this.cateService.listAllCategory().subscribe(res=>{
      this.catelist =res;

    })
  }

  searchTitleAndDescription(): void {
    this.paging.page = 1;
    this.getListAllWithPage();
  }

  handlePageChange(event: number): void {
    this.paging.page = event;
    this.getListAllWithPage();
  }
  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    this.getListAllWithPage();
  }

  //
  // updatePost(id: number, page: number){
  //   this.paging.page = page;
  //   console.log(this.paging.page);
  //   return this.router.navigate([`/admin/bpost/update`,id],{
  //     queryParams:{page: this.paging.page},
  //     relativeTo: this.route
  //   });

  updatePost(id: number){
    // const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput, this.cate);
    // this.router.navigate([`/admin/bpost/update`,id], { queryParams: params });
    this.router.navigate([`/admin/bpost/update`,id]);

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
