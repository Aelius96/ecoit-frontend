
import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Category } from 'src/app/core/model/category/category';
import { Post } from 'src/app/core/model/post/post';
import { CategoryService } from 'src/app/services/category/category.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css'],
})
export class PostControlComponent implements OnInit {

  postList: Post[]=[];
  catelist: Category[]=[];

  baseURL = Constant.BASE_URL;
  postURL = Domain.POST;

  startDate: any;
  endDate: any;

  search={
    searchInput:'',
    startTime: '',
    endTime: '',
    cate : '',
  }
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }

  constructor(private router:Router,
              private postService: PostService,
              private cateService: CategoryService
  ) {
  }

  ngOnInit(): void {
    // this.listAll();
    this.getListAllWithPage();
    this.listAllCate();
  }

  getRequestParams(page: number, pageSize: number,search:string, cate:string , startTime:any , endTime:any): any {
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
      params.cate=cate
    }
    if(startTime){
      params[`start`] = startTime;
    }
    if(endTime){
      params[`end`] = endTime;
    }
    return params;
  }

  getListAllWithPage() {
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.search.searchInput, this.search.cate , this.search.startTime , this.search.endTime );
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

  updatePost(id: number){
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


