import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constant} from "../../core/config/constant";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private apiHelper:ApiHelper) {}

  getRoleById(id:number):Observable<any>{
    return this.apiHelper.get(Constant.ROLE.GET_ROLE_BY_ID + `/${id}`);
  }

  listRole():Observable<any>{
    return this.apiHelper.get(Constant.ROLE.LIST_ROLE);
  }
}
