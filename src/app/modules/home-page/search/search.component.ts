import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/core/model/category/category';
import search = CKEDITOR.tools.search;
import { Domain } from 'src/app/core/domain/domain';
import { CategoryService } from 'src/app/services/category/category.service';
import { Post } from 'src/app/core/model/post/post';
import { Constant } from 'src/app/core/config/constant';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  tongbaiviettimdc = 0;
  postURL = Domain.POST;
  postList: Post[] = [];
  catelist: Category[] = [];
  searchInput = '';
  tag = '';
  cateName = '';
  paging = {
    page: 1,
    size: 9,
    totalRecord: 0,
  };
  baseURL = Constant.BASE_URL;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private cateService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchInput = this.route.snapshot.queryParams['input'];
    this.tag = this.route.snapshot.params['hashtag'];
    this.getListAllWithPageTest();
    this.listAllCate();
  }

  getRequestParamsTest(
    page: number,
    size: number,
    search: string,
    cateName: string,
    hashtag: string
  ): any {
    let params: any = {};
    if (page) {
      params[`pageNo`] = page;
    }
    if (size) {
      params[`pageSize`] = size;
    }
    if (search) {
      params[`search`] = search;
    }
    if (cateName) {
      params['cate'] = cateName;
    }
    if (hashtag) {
      params['tag'] = hashtag;
    }
    return params;
  }
  seach() {}

  getListAllWithPageTest(): void {
    const params = this.getRequestParamsTest(
      this.paging.page,
      this.paging.size,
      this.searchInput,
      this.cateName,
      this.tag
    );

    console.log(params);
    this.postService.search(params).subscribe(
      (response) => {
        this.postList = response.content;
        this.paging.totalRecord = response.totalElements;

        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handlePageChangeTest(event: number): void {
    this.paging.page = event;
    this.getListAllWithPageTest();
  }
  searchPostwithCate() {
    this.getListAllWithPageTest();
  }
  listAllCate() {
    this.cateService.listAllCategory().subscribe((res) => {
      this.catelist = res;
    });
  }
  goToSearch(input: string): void {
    const queryParams = { input: input };
    this.router.navigate(['/tim-kiem'], { queryParams });
    console.log(this.searchInput);
  }
  // viewDetail(url : string) {
  //   const queryParams  = {url : url}
  //   this.router.navigate(["/tin-tuc/chi-tiet"],{queryParams})
  // }
}
