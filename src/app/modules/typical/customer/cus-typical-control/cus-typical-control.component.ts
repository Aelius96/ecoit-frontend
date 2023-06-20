import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../../services/token-storage/token-storage.service";
import {CustomerTypicalService} from "../../../../services/customer-typical/customer-typical.service";
import {CusTypical} from "../cus-typical";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cus-typical-control',
  templateUrl: './cus-typical-control.component.html',
  styleUrls: ['./cus-typical-control.component.css']
})
export class CusTypicalControlComponent implements OnInit{

  cusTypical: CusTypical[] = [];
  role: string;
  pageSizes = [5, 10, 25];
  totalPages: number;
  searchInput= '';

  paging = {
    page: 1,
    size: 6,
    totalRecord: 0
  }
  constructor(private cusTypicalService:CustomerTypicalService, private tokenStorageService: TokenStorageService ,
                private router:Router,) {
  }

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
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput);

    this.cusTypicalService.listAllWithPage(params)
      .subscribe(
        response => {
          this.cusTypical = response.content;
          this.paging.totalRecord = response.totalElements;
          this.totalPages = response.totalPages;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  searchTitleAndDescription(): void {
    this.paging.page = 1;
    this.getListAllWithPage();
  }
  handlePageChange(event: number): void {
    console.log(event);
    this.paging.page = event;
    this.getListAllWithPage();
  }

  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    console.log(event, this.paging.size)
    this.getListAllWithPage();
  }

  deleteTC(id: number){
    let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");

    if(option){
      this.cusTypicalService.deleteTC(id).subscribe(data=>{
        this.getListAllWithPage();
      })
    }
  }

  // customer/cus-typical
  // customer/cus-typical/update/${id}
  updateTC(id : number){
      this.router.navigate([`admin/customer/cus-typical/update/${id}`]);
 }
}

