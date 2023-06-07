import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../services/customer/customer.service";
import {Customer} from "../../../core/model/customer/customer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-control',
  templateUrl: './customer-control.component.html',
  styleUrls: ['./customer-control.component.css']
})
export class CustomerControlComponent implements OnInit{

  customer: Customer[] = [];

  constructor(private customerService: CustomerService,private router:Router ) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getAllCustomer().subscribe(data =>{
        this.customer =data;
    })
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
        this.getCustomers();
      })
    }
  }
}
