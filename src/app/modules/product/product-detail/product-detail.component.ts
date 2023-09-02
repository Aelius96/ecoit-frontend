import { Component } from '@angular/core';
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {ProductService} from "../../../services/product/product.service";
import {Product} from "../../../core/model/product/product";
import { Constant } from 'src/app/core/config/constant';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  url: any;
  content:any;
  imgurl_banner:any;
  product :Product = new Product();
  baseUrl = Constant.BASE_URL;  
  // path :any;
  // banner_path:any;
  constructor(private productService: ProductService, private route: ActivatedRoute,private sanitizer : DomSanitizer ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.url = this.route.snapshot.params['url'];
    this.productService.getProductByUrl(this.url).subscribe(data => {
      this.product = data;
      // this.path = this.product.banner.pathUrl;
      // this.banner_path = this.baseUrl + this.path;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.product.content);
    })
  }

  // this.customer = data;
  // this.cover = this.customer.banner.pathUrl;
  // this.bannerURL = this.baseURL + this.cover;

}
