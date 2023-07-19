import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import {Constant} from "../../../core/config/constant";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  baseURL = Constant.BASE_URL;

  constructor( private productService: ProductService, ) {}
  ngOnInit(): void {
    this.getListAllwithPage()
  }
    getListAllwithPage():void{

      this.productService.getProductList().subscribe(data=>{
        return this.productList=data
      })
    }

}
