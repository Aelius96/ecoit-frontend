import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constant} from "../../core/config/constant";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';
import { Role } from 'src/app/core/model/role/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private apiHelper:ApiHelper) {}

  getRolebyId(id:number):Observable<any>{
    return this.apiHelper.get(Constant.ROLE.GET_ROLE_BY_ID + `/${id}`);
  }

  listRole():Observable<any>{
    return this.apiHelper.get(Constant.ROLE.LIST_ROLE);
  }
  addRole(role:Role):Observable<any>{
   return this.apiHelper.post(Constant.ROLE.ADD_ROLE,role)
  }
  updateRole(role:Role):Observable<any>{
    return this.apiHelper.post(Constant.ROLE.UPDATE_ROLE,role)
  }
  deleteRole(id:number):Observable<any>{
    return this.apiHelper.post(Constant.ROLE.DELETE_ROLE+`/${id}`)
  }
}
