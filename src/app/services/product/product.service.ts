import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable, Cons } from 'rxjs';
import {Product} from "../../core/model/product/product";
import {Domain} from "../../core/domain/domain";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiHelper: ApiHelper) { }

  listAllwithpage(params:any):Observable<any>{
    return this.apiHelper.get(Constant.PRODUCT.LIST_ALL_WITH_PAGE,{params})
  }
  getProductList(): Observable<any>{
    return this.apiHelper.get(Constant.PRODUCT.GET_PRODUCT_LIST);
  }
  searchProductList(param: HttpParams): Observable<any>{
    return this.apiHelper.get( Constant.PRODUCT.SEARCH_PRODUCT_LIST , {params: param});
  }

  getProductById(id:number): Observable<any>{
    return this.apiHelper.get( Constant.PRODUCT.GET_PRODUCT_BY_ID + `/${id}`);
  }

  getProductByUrl(url: string): Observable<any>{
    return this.apiHelper.get( Constant.PRODUCT.GET_PRODUCT_BY_URL + `/${url}`);
  }

  addNewProduct(newProduct: FormData): Observable<any>{
    return this.apiHelper.post(Constant.PRODUCT.ADD_NEW_PRODUCT, newProduct);
  }

  updateProduct(id: number, product: FormData): Observable<any>{
    return this.apiHelper.post( Constant.PRODUCT.UPDATE_PRODUCT + `/${id}`, product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.apiHelper.delete( Constant.PRODUCT.DELETE_PRODUCT +`/${id}`);
  }
}
