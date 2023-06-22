import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../services/customer/customer.service";
import {Customer} from "../../../core/model/customer/customer";
import {Router} from "@angular/router";
import { Role } from '../../../core/model/role/role';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-customer-control',
  templateUrl: './customer-control.component.html',
  styleUrls: ['./customer-control.component.css']
})
export class CustomerControlComponent implements OnInit{

  customer: Customer[] = [];
  role:string;

  searchInput= '';
  paging={
    page: 1,
    size:4,
    totalRecord: 0 
  }

  constructor(private customerService: CustomerService,
             private router:Router,
             private totkenstorageService: TokenStorageService ) {
  }

  ngOnInit(): void {
    const user = this.totkenstorageService.getUser();
    this.role = user.roles
    this.  getlistallwithPage();
  }

  getRequestparams(page: number , pageSize: number, search: string):any{
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
  getlistallwithPage(){
      const params= this.getRequestparams(this.paging.page , this.paging.size, this.searchInput)
      this.customerService.listAllWithPage(params).subscribe(data=>{
        this.customer = data.content;
        this.paging.totalRecord = data.totalElements;
      
      },
      error=>{
        console.error(error)
      }
      );
  }

search():void{
  this.paging.page =1 ;
  this.getlistallwithPage();
}
handlePageChange(event:number):void{
  console.log(event);
  this.paging.page = event;
  this.getlistallwithPage();
}
handlePageSizeChange(event: any): void {
  this.paging.size = event;
  this.paging.page = 1;
  console.log(event, this.paging.size)
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
      this.customerService.deleteCustomer(id).subscribe(data =>{
        this.getlistallwithPage();
      })
    }
  }
}
