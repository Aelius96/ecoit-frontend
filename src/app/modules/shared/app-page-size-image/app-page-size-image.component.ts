import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Constant } from 'src/app/core/config/constant';

@Component({
  selector: 'app-app-page-size-image',
  templateUrl: './app-page-size-image.component.html',
  styleUrls: ['./app-page-size-image.component.css']
})
export class AppPageSizeImageComponent {

  @Input() pageSize: number;

  @Input() totalRecords: number;

  @Input() name = ' bản ghi';

  @Output() pageSizeChange = new EventEmitter<number>();

  pageSizeOptions = Constant.PAGE_SIZE_IMAGE;

  changePageSize() {
    this.pageSizeChange.emit(this.pageSize);
  }
}
