import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constant} from "../../core/config/constant";
import {Domain} from "../../core/domain/domain";
import { Category } from '../../core/model/category/category';
import { Params } from '@angular/router';
import { Obj } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.CATEGORY}`

  constructor(private http:HttpClient) { }

  ListPageSize(params:Params):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.domain}` , {params})
  }

  public listAllCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}/${this.domain}/list`);

  }

  //  public getNumberById(id: number): Observable<Number> {
  //   return this.httpclient.get<Number>(`${this.baseUrl}/${this.domain}/${id}`);
  // }

  GetCateByid(id:number):Observable<Category>{
    return this.http.get<Category>(`${this.baseUrl}/${this.domain}/${id}`)
  }

  AddCategory( category: Category ):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/create` , category)
  }

  DeleteCate(id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}/${this.domain}/delete/${id}`)
  }

  UpdateCate(id:number,category:Category):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/update/${id}`,category)
  }
 

  GetCategory():Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}/get`)
  }
}
