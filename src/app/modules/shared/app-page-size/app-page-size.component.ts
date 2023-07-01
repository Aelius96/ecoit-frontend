import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Constant} from "../../../core/config/constant";

@Component({
  selector: 'app-page-size',
  templateUrl: './app-page-size.component.html',
  styleUrls: ['./app-page-size.component.css']
})
export class AppPageSizeComponent {
  @Input() pageSize: number;

  @Input() totalRecords: number;

  @Input() name = ' bản ghi';

  @Output() pageSizeChange = new EventEmitter<number>();

  pageSizeOptions = Constant.PAGE_SIZE_OPTION;

  changePageSize() {
    this.pageSizeChange.emit(this.pageSize);
  }

  
}
