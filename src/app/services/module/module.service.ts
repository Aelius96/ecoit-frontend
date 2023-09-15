import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { Module } from 'src/app/core/model/module/module';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http:HttpClient ,private apiHelper :ApiHelper) { }
  JSON_PATH ='../../assets/json/'
  getaside(fileName : string) : Observable<any> {
    return this.http.get(this.JSON_PATH + fileName)
  }
  getListModule():Observable<any>{
    return this.apiHelper.get(Constant.MODULE.GET_LIST_MODULE)
  }
  getModule():Observable<any>{
    return this.apiHelper.get(Constant.MODULE.GET_LIST_MODULE_PER)
  }
  addModule(module:Module):Observable<any>{
   return this.apiHelper.post(Constant.MODULE.ADD_MODULE,module);
  }
  updateModule(module:Module):Observable<any>{
    return this.apiHelper.post(Constant.MODULE.UPDATE_MODULE, module)
  }
  deleteModule(id:number):Observable<any>{
    return this.apiHelper.post(Constant.MODULE.DELETE_MODLUE+`/${id}`)
  }
  getModuleById(id:number):Observable<any>{
    return this.apiHelper.get(Constant.MODULE.GET_MODULE_BY_ID+`/${id}`)
  }
  }
