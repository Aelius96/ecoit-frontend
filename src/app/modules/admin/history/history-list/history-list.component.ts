import { Component } from '@angular/core';
import { History } from 'src/app/core/model/history/history';
import { HistoryService } from 'src/app/services/history/history.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css'],
})
export class HistoryListComponent {
  history: History = new History();
  historyList: History[] = [];
  searchInput = {
    input: '',
  };
  searchField = {
    pageIndex: 1,
    pageSize: 10,
    startDate: '',
    endDate: '',
    totalElements: 0,
    method: '',
    executor: '',
    type: '',
    page: '',
  };
  constructor(private historySevice: HistoryService) {}
  ngOnInit() {
    this.getAllCatePageSize();
  }
  // getBySearch() {
  //   this.historySevice.getListHis().subscribe((data) => {
  //     this.historyList = data.content;
  //     console.log(data);
  //   });
  // }
  getPageSizeParams(
    page: number,
    pageSize: number,
    searchinput: string,
    method: string,
    type: string,
    startDate: string,
    endDate: string,
  ): any {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if (searchinput) {
      params[`search`] = searchinput;
    }

    if (method) {
      params[`method`] = method;
    }

    if (type) {
      params[`type`] = type;
    }

    if (startDate) {
      params[`startDate`] = searchinput;
    }

    if(endDate){
      params['endDate']=endDate;
    }

    return params;
  }
  getAllCatePageSize(): void {
    console.log(this.searchField.method)
    const params = this.getPageSizeParams(
      this.searchField.pageIndex,
      this.searchField.pageSize,
      this.searchInput.input,
      this.searchField.method,
      this.searchField.type,
      this.searchField.startDate,
      this.searchField.endDate
    );
    this.historySevice.ListPageSize(params).subscribe(
      (res) => {
        this.historyList = res.content;
        this.searchField.totalElements = res.totalElements;
        console.log(this.historyList);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  search() {
    this.searchField.pageIndex = 1;
    this.getAllCatePageSize();
  }
  handlepagechange(event: number): void {
    console.log(event);
    this.searchField.pageSize = event;
    this.getAllCatePageSize();
  }
  handlePageSizeChange(event: any): void {
    this.searchField.pageSize = event;
    this.searchField.pageIndex = 1;
    console.log(event, this.searchField.pageSize);
    this.getAllCatePageSize();
  }
  changeMethod(event:any){
    this.searchField.method=event.target.value;
    this.getAllCatePageSize();
  }
  changeType(event:any){
    this.searchField.type=event.target.value;
    this.getAllCatePageSize();
  }
  changExecutor(event:any){
    this.searchField.executor=event.target.value;
    this.getAllCatePageSize();
  }
}
