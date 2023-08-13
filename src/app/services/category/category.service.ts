import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constant} from "../../core/config/constant";
import {Domain} from "../../core/domain/domain";
import { Category } from '../../core/model/category/category';
import { Params } from '@angular/router';
import { Obj } from '@popperjs/core';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.CATEGORY}`

  constructor(private apiHelper : ApiHelper) { }

  ListPageSize(params:Params):Observable<any>{
    return this.apiHelper.get( Constant.CATEGORY.LIST_PAGE_SIZE , {params})
  }

  public listAllCategory(): Observable<Category[]>{
    return this.apiHelper.get(Constant.CATEGORY.LIST);

  }

  GetCateByid(id:number):Observable<Category>{
    return this.apiHelper.get( Constant.CATEGORY.GET_BY_ID + `/${id}`)
  }

  AddCategory( category: Category ):Observable<Object>{
    return this.apiHelper.post(Constant.CATEGORY.CREATE , category)
  }

  DeleteCate(id:number):Observable<Object>{
    return this.apiHelper.delete( Constant.CATEGORY.DELETE  +`/${id}`)
  }

  UpdateCate(id:number,category:Category):Observable<Object>{
    return this.apiHelper.post( Constant.CATEGORY.UPDATE + `/${id}`,category)
  }
 
}
