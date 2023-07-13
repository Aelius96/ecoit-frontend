import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constant} from "../../core/config/constant";
import {Domain} from "../../core/domain/domain";
import {Category} from "../../core/model/category/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.CATEGORY}`

  constructor(private http:HttpClient) { }

  public listAllCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}/${this.domain}/list`);

  }

  AddCategory( category: Category ):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/create` , category)
  }

  DeleteCate(id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}/${this.domain}/delete/${id}`)
  }

  UpdateCate(id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}/${this.domain}/update/${id}`)
  }
 

  GetCategory():Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}/get`)
  }
}
