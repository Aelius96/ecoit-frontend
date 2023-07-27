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
  typDomain = `${Domain.CUSTYPICAL}`;
  constructor(private http:HttpClient) { }

  listAllWithPage(params: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}/${this.typDomain}`,{params})
  }
  listAllWithPageHome(params: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}/${this.typDomain}/home`,{params})
  }
  // public listAll(): Observable<CusTypical[]>{
  //   return this.http.get<CusTypical[]>(`${this.baseUrl}/home/news/show`);
  // }
  public listAll(): Observable<CusTypical[]>{
    return this.http.get<CusTypical[]>(`${this.baseUrl}/${this.domain}/${this.typDomain}/home/show`)
  }

  public getTCByUrl(url: any): Observable<CusTypical>{
    return this.http.get<CusTypical>(`${this.baseUrl}/${this.domain}/${this.typDomain}/${url}`);
  }

  addTC(cusTypical: FormData): Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/${this.typDomain}/add`, cusTypical);
  }

  public getTCById(id: number): Observable<CusTypical>{
    return this.http.get<CusTypical>(`${this.baseUrl}/${this.domain}/${this.typDomain}/${id}`);
  }

  updateTC(id: number, cusTypical: FormData):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/${this.typDomain}/update/${id}`,cusTypical);
  }

  deleteTC(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${this.domain}/${this.typDomain}/delete/${id}`);
  }

}
