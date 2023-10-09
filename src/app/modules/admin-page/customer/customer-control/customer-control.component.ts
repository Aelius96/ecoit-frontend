import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Customer } from 'src/app/core/model/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-control',
  templateUrl: './customer-control.component.html',
  styleUrls: ['./customer-control.component.css']
})
export class CustomerControlComponent implements OnInit{

  customer: Customer[] = [];

  searchInput= '';
  baseURL = Constant.BASE_URL;
  CusURL = Domain.CUSTOMER;

  paging={
    page: 1,
    size:5,
    totalRecord: 0
  }

  constructor(private customerService: CustomerService,
             private router:Router ) {
  }

  ngOnInit(): void {

    this.getlistallwithPage();
  }

  getparams(page: number , pageSize: number, search: string):any{

    let params: any = {};

    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if(search){
      params[`search`] = search;
    }
    return params;
  }
  getlistallwithPage(){
      const params= this.getparams(this.paging.page , this.paging.size, this.searchInput)
      this.customerService.listAllWithPage(params).subscribe(data=>{
        this.customer = data.content;
        this.paging.totalRecord = data.totalElements;
        console.log(this.customer)
      },
      error=>{
        console.error(error)
      }
      );
  }

search():void{
  this.paging.page = 1;
  this.getlistallwithPage();
}
handlePageChange(event:number):void{
  // console.log(event);
  this.paging.page = event;
  this.getlistallwithPage();
}
handlePageSizeChange(event: any): void {
  this.paging.size = event;
  this.paging.page = 1;
  // console.log(event, this.paging.size)
  this.getlistallwithPage();
}
  addCustomer(){
    this.router.navigate([`/admin/customer/add`])
  }

  updateCustomer(id:number){
    this.router.navigate([`/admin/customer/update/${id}`])
  }

  deleteCustomer(id: number){
    let option = confirm("Bạn có chắc chắn xóa khách hàng này?");

    if(option){
      this.customerService.deleteCustomer(id).subscribe(() =>{
        this.getlistallwithPage();
      })
    }
  }
}
