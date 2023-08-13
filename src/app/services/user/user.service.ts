import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, ObservedValueOf, Cons } from 'rxjs';
import {User} from "../../core/model/user/user";
import {Constant} from "../../core/config/constant";
import {Domain} from "../../core/domain/domain";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiHelper:ApiHelper) { }

  getListAllwithpageUser(params:any):Observable<any>{
    return this.apiHelper.get( Constant.USER.GET_LIST_ALL_WITH_PAGE_USER , {params})
  }

  public getUserById(id:number):Observable<any>{
    return this.apiHelper.get( Constant.USER.GET_USER_BY_ID +`/${id}`);
  }

  updateUser(id: number, formData: FormData):Observable<Object>{
    return this.apiHelper.post( Constant.USER.UPDATE_USER +`/${id}`,formData);
  }

  public deleteUser(id: number): Observable<any> {
    return this.apiHelper.delete( Constant.USER.DELETE_USER +`/${id}`);
  }

  changePassword(id: number):Observable<any>{
    return this.apiHelper.post( Constant.USER.CHANGE_PASSWORD ,id);
  }
}
