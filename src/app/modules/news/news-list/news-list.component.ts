import {Component, OnInit} from '@angular/core';
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{

  newsList : News[] = [];

  page = 1;
  count = 0;
  pageSize = 9;
  searchInput = '';
  private totalPages: number;
  paging = {
    page: 1,
    size: 10,
    totalRecord: 0
  }


  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.getListAllWithPage();
  }

  // public listAll(){
  //   this.newsService.listAll().subscribe(data =>{
  //     this.newsList = data;
  //   })
  // }

  getRequestParams(page: number): any {
    let params: any = {};
    if (page) {
      params[`pageNo`] = page-1;
    }
  }

  getListAllWithPage(): void {
    const params = this.getRequestParams(this.page);
    this.newsService.listAllWithPageHome(params)
      .subscribe(
        response => {
          this.newsList = response.content;
          this.paging.totalRecord = response.totalElements;

          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.getListAllWithPage();
  }
}
