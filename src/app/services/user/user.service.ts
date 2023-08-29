import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, ObservedValueOf, Cons } from 'rxjs';
import {Constant} from "../../core/config/constant";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';
import { User } from 'src/app/core/model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiHelper:ApiHelper,private http:HttpClient) { }

  getListAllwithpageUser(params:any):Observable<any>{
    return this.apiHelper.get( Constant.USER.GET_LIST_ALL_WITH_PAGE_USER , {params})
  }

  public getUserById(id:number):Observable<any>{
    return this.apiHelper.get( Constant.USER.GET_USER_BY_ID +`/${id}`);
  }


  public deleteUser(id: number): Observable<any> {
    return this.apiHelper.delete(Constant.USER.DELETE_USER + `/${id}`);
  }
  updateUser(id: number, user:User):Observable<Object>{
    return this.apiHelper.post(Constant.USER.UPDATE_USER+`/${id}`,user);
  }

  changePassword(id: number):Observable<any>{
    return this.apiHelper.post( Constant.USER.CHANGE_PASSWORD ,id);
  }
}
