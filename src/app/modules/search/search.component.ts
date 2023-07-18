import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post/post.service";
import {Post} from "../../core/model/post/post";
import search = CKEDITOR.tools.search;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit
{
  postList :Post[] = [];
  searchInput = '';
  paging = {
    page: 1,
    size: 9,
    totalRecord: 0
  }

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.searchInput =  this.route.snapshot.params['searchInput'];
    this.getListAllWithPageTest();
  }

  getRequestParamsTest(page: number,size: number, search: string): any {
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
    return params;
  }

  getListAllWithPageTest(): void {
    const params = this.getRequestParamsTest(this.paging.page,this.paging.size,this.searchInput);
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

}
