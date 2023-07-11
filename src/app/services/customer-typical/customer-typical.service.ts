import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../../core/config/constant";
import {Observable} from "rxjs";
import {News} from "../../core/model/news/news";
import {CusTypical} from "../../modules/typical/customer/cus-typical";
import {Domain} from "../../core/domain/domain";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypicalService {

  baseUrl = `${Constant.BASE_URL}`
  domain = `${Domain.CUSTOMER}`
  constructor(private http:HttpClient) { }

  listAllWithPage(params: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}/cus-typical`,{params})
  }
  listAllWithPageHome(params: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}/cus-typical/home`,{params})
  }
  // public listAll(): Observable<CusTypical[]>{
  //   return this.http.get<CusTypical[]>(`${this.baseUrl}/home/news/show`);
  // }
  public listAll(): Observable<CusTypical[]>{
    return this.http.get<CusTypical[]>(`${this.baseUrl}/${this.domain}/cus-typical/home/show`)
  }

  public getTCByUrl(url: any): Observable<CusTypical>{
    return this.http.get<CusTypical>(`${this.baseUrl}/${this.domain}/cus-typical/${url}`);
  }

  addTC(cusTypical: FormData): Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/cus-typical/add`, cusTypical);
  }

  public getTCById(id: number): Observable<CusTypical>{
    return this.http.get<CusTypical>(`${this.baseUrl}/${this.domain}/cus-typical/${id}`);
  }

  updateTC(id: number, cusTypical: FormData):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/cus-typical/update/${id}`,cusTypical);
  }

  deleteTC(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${this.domain}/cus-typical/delete/${id}`);
  }

}
