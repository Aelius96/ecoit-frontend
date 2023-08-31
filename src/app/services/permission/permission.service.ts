import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';
import { Permission } from '../../core/model/permission/permission';
import { P } from '@angular/cdk/keycodes';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor( private apiHelper : ApiHelper ) { }

  listAll():Observable<any>{
   return this.apiHelper.get(Constant.PERMISSION.GET_LIST_ALL)
  }
  deletePermission(id:number ):Observable<any>{
    return this.apiHelper.delete(Constant.PERMISSION.DELETE+`/${id}` )
  }
  updatePermission(id:number , permission:Permission):Observable<any>{
    return this.apiHelper.post(Constant.PERMISSION.UPDATE+`/${id}` , permission)
  }
  addPermission(permission:Permission):Observable<any>{
    return this.apiHelper.post(Constant.PERMISSION.ADD, permission)
  }
}
