import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import { Customer } from 'src/app/core/model/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

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
