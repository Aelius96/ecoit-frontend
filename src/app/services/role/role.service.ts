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

  getModulebyId(id:number):Observable<any>{
    return this.apiHelper.get(Constant.ROLE.GET_ROLE_BY_ID + `/${id}`);
  }

  listRole():Observable<any>{
    return this.apiHelper.get(Constant.ROLE.LIST_ROLE);
  }
  addRole(role:Role):Observable<any>{
   return this.apiHelper.post(Constant.ROLE.ADD_ROLE,role)
  }
  updateRole(id:number,role:Role):Observable<any>{
    return this.apiHelper.post(Constant.ROLE.UPDATE_ROLE+`${id}`,role)
  }
  deleteRole(id:number,role:Role):Observable<any>{
    return this.apiHelper.delete(Constant.ROLE.DELETE_ROLE+`${id}`,role)
  }
}
