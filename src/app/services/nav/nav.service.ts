import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Nav } from '../../core/model/nav/nav';
import {Constant} from "../../core/config/constant";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private apiHelper: ApiHelper) { }

  listAllWithPage(params: any): Observable<any>{
    return this.apiHelper.get(Constant.NAV.LIST_ALL_WITH_PAGE,{params})
  }

  listAll(): Observable<any>{
    return this.apiHelper.get(Constant.NAV.LIST_ALL)
  }

  public getNavById(id: number): Observable<Nav> {
    return this.apiHelper.get(Constant.NAV.GET_NAV_BY_ID +`/${id}`);
  }

  public addNav(nav: Nav): Observable<Nav> {
    return this.apiHelper.post(Constant.NAV.ADD_NAV,nav);
  }

  public updateNav(id: number,nav: Nav): Observable<any> {
    return this.apiHelper.post( Constant.NAV.UPDATE_NAV + `/${id}`, nav);
  }

  public deleteNav(id: number): Observable<Object> {
    return this.apiHelper.delete( Constant.NAV.DELETE_NAV + `/${id}`);
  }
  public deleteNavAll(formData: FormData): Observable<Object> {
    return this.apiHelper.delete( Constant.NAV.DELETE_NAV_ALL ,formData);
  }

  public getChildNav(id : number) {
    return this.apiHelper.get(Constant.NAV.LIST_ALL_WITH_PAGE+ `/${id}`)
  }

}
