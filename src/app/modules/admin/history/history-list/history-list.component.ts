import { Component } from '@angular/core';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent {

  searchField = {
    pageIndex: 1,
    pageSize: 10,
    sortField: '',
    sortDir: '',
    totalElements: 0,
    method: '',
    executor: '',
    action: '',
    page: ''
  }

  getBySearch(){}


  search(){
    this.searchField.pageIndex = 1;
    this.getBySearch();
  }
}
