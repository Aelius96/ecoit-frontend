import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../core/model/product/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = `${Constant.BASE_URL}`;

  constructor(private http: HttpClient) { }

  listAllwithpage(params:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/product`,{params})
  }
  getProductList(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/home/product`);
  }
  searchProductList(param: HttpParams): Observable<any>{
    return this.http.get(`${this.baseUrl}/product/search`, {params: param});
  }

  getProductById(id:number): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/product/${id}`);
  }

  getProductByUrl(url: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/home/product/${url}`);
  }

  addNewProduct(newProduct: FormData): Observable<Object>{
    return this.http.post(`${this.baseUrl}/product/add`, newProduct);
  }

  updateProduct(id: number, product: FormData): Observable<Object>{
    return this.http.post(`${this.baseUrl}/product/update/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/product/delete/${id}`);
  }
}
