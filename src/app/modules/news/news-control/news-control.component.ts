import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import {Constant} from "../../../core/config/constant";

@Component({
  selector: 'app-news-control',
  templateUrl: './news-control.component.html',
  styleUrls: ['./news-control.component.css']
})
export class NewsControlComponent implements OnInit{

  newsList: News[]=[];
  role:string;
  currentIndex = -1;
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 25];
  totalPages: number;
  searchInput= '';

  paging = {
    page: 1,
    size: 10,
    totalRecord: 0
  }

  constructor(private router:Router, private newsService: NewsService,
              private tokenStorageService: TokenStorageService) {}



  ngOnInit(): void {

      const user = this.tokenStorageService.getUser();
      this.role =user.roles;

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

  getListAllWithPage(): void {
    const params = this.getRequestParams(this.page, this.pageSize, this.searchInput);

    this.newsService.listAllWithPage(params)
      .subscribe(
        response => {
          this.newsList = response.content;
          this.paging.totalRecord = response.totalElements;
          this.totalPages = response.totalPages;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  searchTitleAndDescription(): void {
    this.page = 1;
    this.getListAllWithPage();
  }
  handlePageChange(event: number): void {
    console.log(event);
    this.page = event;
    this.getListAllWithPage();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event;
    this.page = 1;
    console.log(event, this.pageSize)
    this.getListAllWithPage();
  }

  // listAll(){
  //   this.newsService.listAll().subscribe(data =>{
  //      this.newsList =data;
  //   })
  // }

  updateNews(id: number){
    return this.router.navigate([`/admin/news/edit`,id]);

  }



  deleteNews(id: number){
    let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");

    if(option){
      this.newsService.deleteNews(id).subscribe(data=>{
        this.getListAllWithPage();
      })
    }
  }






}
