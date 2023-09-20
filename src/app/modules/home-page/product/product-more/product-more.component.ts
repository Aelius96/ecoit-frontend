import { Component } from '@angular/core';
import { Product } from 'src/app/core/model/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { Domain } from 'src/app/core/domain/domain';
import { Constant } from 'src/app/core/config/constant';

@Component({
  selector: 'app-product-more',
  templateUrl: './product-more.component.html',
  styleUrls: ['./product-more.component.css']
})
export class ProductMoreComponent {
  productURL = Domain.PRODUCT;
  productList : Product[]=[]
  baseURL = Constant.BASE_URL;

  constructor ( private proService: ProductService){}
  ngOnInit(): void {
    this.getListAll()
  }

 getListAll(){
  this.proService.getProductList().subscribe(data=>{
    return this.productList=data;
  })
 }

}
