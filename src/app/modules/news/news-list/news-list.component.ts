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


  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.getListAllWithPage();
  }

  public listAll(){
    this.newsService.listAll().subscribe(data =>{
      this.newsList = data;
    })
  }

  getRequestParams(page: number): any {
    let params: any = {};
    if (page) {
      params[`pageNo`] = page-1;
    }
  }

  getListAllWithPage(): void {
    const params = this.getRequestParams(this.page);

    this.newsService.listAllWithPage(params)
      .subscribe(
        response => {
          this.newsList = response.content;
          this.count = response.totalItems;
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
