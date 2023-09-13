import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';
import { Permission } from '../../core/model/permission/permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor( private apiHelper : ApiHelper ) { }

  listAll():Observable<any>{
   return this.apiHelper.get(Constant.PERMISSION.GET_LIST_ALL)
  }
  deletePermission(id:number ):Observable<any>{
    return this.apiHelper.post(Constant.PERMISSION.DELETE+`/${id}` )
  }
  updatePermission( permission:Permission):Observable<any>{
    return this.apiHelper.post(Constant.PERMISSION.UPDATE, permission)
  }
  addPermission(permission:Permission):Observable<any>{
    return this.apiHelper.post(Constant.PERMISSION.ADD, permission)
  }
  getPerById(id:number):Observable<any>{
    return this.apiHelper.get(Constant.PERMISSION.GET_PER_BY_ID+`/${id}`)
  }
}
