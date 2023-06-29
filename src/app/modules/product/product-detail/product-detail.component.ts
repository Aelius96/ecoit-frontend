import { Component } from '@angular/core';
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {ProductService} from "../../../services/product/product.service";
import {Product} from "../../../core/model/product/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  url: any;
  content:any;

  product :Product = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute,private sanitizer : DomSanitizer ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.url = this.route.snapshot.params['url'];
    this.productService.getProductByUrl(this.url).subscribe(data => {
      this.product = data;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.product.content);
    })
  }


}
