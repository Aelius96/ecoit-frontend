import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from "../../../core/model/product/product";
import { ProductService } from "../../../services/product/product.service";
import { Constant } from "../../../core/config/constant";
import { Domain } from "../../../core/domain/domain";
import { Toast, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.css']
})
export class ProductControlComponent implements OnInit {

  products: Product[] = [];
  currentIndex = -1;
  totalPages: number;
  searchInput = '';
  baseURL = Constant.BASE_URL;
  productURL = Domain.PRODUCT;
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }

  constructor(private router: Router,
    private productService: ProductService) {
  }
  ngOnInit(): void {
    this.getProductListAllwithPage();
  }

  getRequestParams(page: number, pageSize: number, search: string): any {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page - 1;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if (search) {
      params[`search`] = search;
    }
    return params;
  }

  getProductListAllwithPage() {
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput)
    this.productService.listAllwithpage(params).subscribe(data => {
      this.products = data.content;
      this.paging.totalRecord = data.totalElements;
      this.totalPages = data.totalPages;
    },
      error => {
        console.log(error);
      }
    )

  }

  search(): void {
    this.paging.page = 1;
    this.getProductListAllwithPage()
  }

  handlePageChange(event: number): void {
    // console.log(event);
    this.paging.page = event;
    this.getProductListAllwithPage();
  }
  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    // console.log(event, this.paging.size)
    this.getProductListAllwithPage();
  }

  updateProduct(id: number) {
    return this.router.navigate(['admin/product/update', id]);

  }

  addProduct() {
    return this.router.navigate([`admin/product/add`]);
  }

  deleteProduct(id: number) {
    let option = confirm("Bạn có chắc chắn xóa khách hàng này?");

    if (option) {
      this.productService.deleteProduct(id).subscribe(data => {
        this.getProductListAllwithPage();
      })
    }
  }
}
