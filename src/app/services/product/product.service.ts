import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../core/model/product/product";
import {Domain} from "../../core/domain/domain";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.PRODUCT}`

  constructor(private http: HttpClient) { }

  listAllwithpage(params:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}`,{params})
  }
  getProductList(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/${this.domain}/home`);
  }
  searchProductList(param: HttpParams): Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}/search`, {params: param});
  }

  getProductById(id:number): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${this.domain}/${id}`);
  }

  getProductByUrl(url: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${this.domain}/home/${url}`);
  }

  addNewProduct(newProduct: FormData): Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/add`, newProduct);
  }

  updateProduct(id: number, product: FormData): Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/update/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${this.domain}/disable/${id}`);
  }
}
