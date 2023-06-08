import {Component, Input} from '@angular/core';
import {Customer} from "../../../core/model/customer/customer";
import {CustomerService} from "../../../services/customer/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

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
}
