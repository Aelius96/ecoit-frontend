import { Component } from '@angular/core';
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {Customer} from "../../../core/model/customer/customer";
import {CustomerService} from "../../../services/customer/customer.service";
import {Constant} from "../../../core/config/constant";
import { Domain } from 'src/app/core/domain/domain';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {
  url: any;
  customer :Customer = new Customer();
  cover:any;
  baseURL = Constant.BASE_URL
  productURL = Domain.PRODUCT
  cusURL = Domain.CUSTOMER
  bannerURL: any;
  constructor(private customerService: CustomerService, private route: ActivatedRoute,private sanitizer : DomSanitizer ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.url = this.route.snapshot.params['url'];
    this.customerService.getCusByUrl(this.url).subscribe(data => {
      this.customer = data;
      this.cover = this.customer.banner.pathUrl;
      this.bannerURL = `${this.baseURL}/${this.cusURL}/image/${this.customer.id}`
      document.title = "KHỐI " + this.customer.name.toUpperCase();
      console.log(document.title);
    })
  }
}
