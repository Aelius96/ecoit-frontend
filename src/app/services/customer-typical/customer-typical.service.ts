import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../../core/config/constant";
import {Observable} from "rxjs";
import {CusTypical} from "../../modules/typical/customer/cus-typical";
import {Domain} from "../../core/domain/domain";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypicalService {
  
  constructor(private apiHelper:ApiHelper,private http : HttpClient) { }

  listAllWithPage(params: any): Observable<any>{
    return this.apiHelper.get(Constant.CUSTYPICAL.LIST_ALL_WITH_PAGE,{params})
  }
  listAllWithPageHome(params: any): Observable<any>{
    return this.apiHelper.get( Constant.CUSTYPICAL.LIST_ALL_WITH_PAGE_HOME,{params})
  }

  public listAll(): Observable<CusTypical[]>{
    return this.apiHelper.get( Constant.CUSTYPICAL.LIST_ALL)
  }

  public getTCByUrl(url: any): Observable<CusTypical>{
    return this.apiHelper.get( Constant.CUSTYPICAL.GETTC_BY_URL + `/${url}`);
  }

  addTC(cusTypical: FormData): Observable<Object>{
    return this.apiHelper.post( Constant.CUSTYPICAL.ADDTC , cusTypical);
  }

  public getTCById(id: number): Observable<CusTypical>{
    return this.apiHelper.get( Constant.CUSTYPICAL.GETTC_BY_ID + `/${id}`);
  }

  updateTC(id: number, cusTypical: FormData):Observable<Object>{
    return this.apiHelper.post( Constant.CUSTYPICAL.UPDATETC + `/${id}`,cusTypical);
  }

  deleteTC(id: number): Observable<Object>{
    return this.apiHelper.delete( Constant.CUSTYPICAL.DELETETC + `/${id}`);
  }
  

}
