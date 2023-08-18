import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post/post.service";
import {Post} from "../../core/model/post/post";
import { Category } from 'src/app/core/model/category/category';
import search = CKEDITOR.tools.search;
import {Constant} from "../../core/config/constant";
import { Domain } from 'src/app/core/domain/domain';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit
{
  postURL = Domain.POST;
  postList :Post[] = [];
  catelist: Category[]=[];
  searchInput = '';
  tag = '';
  cateName = '';
  paging = {
    page: 1,
    size: 9,
    totalRecord: 0
  }
  baseURL = Constant.BASE_URL;

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private cateService: CategoryService ,
              private router:Router) {
  }

  ngOnInit(): void {
    this.searchInput =  this.route.snapshot.params['searchInput'];
    this.tag = this.route.snapshot.params['hashtag'];
    this.getListAllWithPageTest();
    this.listAllCate()
  }

  getRequestParamsTest(page: number,size: number, search: string,cateName : string, hashtag: string): any {
    let params: any = {};
    if (page) {
      params[`pageNo`] = page-1;
    }
    if (size) {
      params[`pageSize`] = size;
    }
    if(search){
      params[`search`] = search;
    }
    if(cateName) {
      params['cate'] = cateName
    }
    if(hashtag) {
      params['tag'] = hashtag
    }
    return params;
  }

  getListAllWithPageTest(): void {
    const params = this.getRequestParamsTest(this.paging.page,this.paging.size,this.searchInput,this.cateName,this.tag);

    console.log(params)
    this.postService.search(params)
      .subscribe(
        response => {
          this.postList = response.content;
          this.paging.totalRecord = response.totalElements;

          console.log(response);

        },
        error => {
          console.log(error);
        });
      
  }

  handlePageChangeTest(event: number): void {
    this.paging.page = event;
    this.getListAllWithPageTest();
  }
  searchPostwithCate() {
    this.getListAllWithPageTest();
  }
  listAllCate(){
    this.cateService.listAllCategory().subscribe(res=>{
      this.catelist =res;

    })
  }
  goToSearch():void{
    this.router.navigate(['/tim-kiem/'+this.searchInput]);
    console.log(this.searchInput);
  }

}
