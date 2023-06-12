import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Product} from "../../../core/model/product/product";
import {ProductService} from "../../../services/product/product.service";


@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.css']
})
export class ProductControlComponent implements OnInit{
  products: Product[] = [];
  url: string;
  constructor(private router:Router,private productService : ProductService) {
  }
  ngOnInit(): void {
    this.getProductList();
  }
    getProductList(){
    this.productService.getProductList().subscribe(data =>{
      this.products = data;
      }
    )
    }




    updateProduct(id: number){
      return this.router.navigate(['admin/product/update', id]);

    }

    addProduct(){
    return this.router.navigate([`admin/product/add`]);
    }


  deleteProduct(id: number){
    let option = confirm("Bạn có chắc chắn xóa khách hàng này?");

    if(option){
      this.productService.deleteProduct(id).subscribe(data =>{
        this.getProductList();
      })
    }
  }


}
