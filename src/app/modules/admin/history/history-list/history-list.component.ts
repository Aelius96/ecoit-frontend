import { Component } from '@angular/core';
import { History } from 'src/app/core/model/history/history';
import { HistoryService } from 'src/app/services/history/history.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent {
  historyList : History[]= []

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
  constructor(private historySevice: HistoryService){
  }
  ngOnInit(){
   this.getBySearch()
  }
  getBySearch(){
    this.historySevice.getListHis().subscribe(data=>{
      this.historyList=data.content
      console.log(data)
    })
  }


  search(){
    this.searchField.pageIndex = 1;
    this.getBySearch();
  }
}
