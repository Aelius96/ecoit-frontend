import { Component } from '@angular/core';
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {Customer} from "../../../core/model/customer/customer";
import {CustomerService} from "../../../services/customer/customer.service";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {
  url: any;
  customer :Customer = new Customer();
  cover:any;

  constructor(private customerService: CustomerService, private route: ActivatedRoute,private sanitizer : DomSanitizer ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.url = this.route.snapshot.params['url'];
    this.customerService.getCusByUrl(this.url).subscribe(data => {
      this.customer = data;
      this.cover = this.customer.banner.pathUrl;
      document.title = "KHỐI " + this.customer.name.toUpperCase();
    })
  }
}
