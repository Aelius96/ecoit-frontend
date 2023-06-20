import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Nav} from "../../core/model/nav/nav";
import {Constant} from "../../core/config/constant";
import {Number} from "../../modules/typical/number/number";
import {Params} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private baseUrl = `${Constant.BASE_URL}`
  constructor(private http: HttpClient) { }

  listAll(): Observable<Nav[]>{
    return this.http.get<Nav[]>(`${this.baseUrl}/nav`)
  }

  public getNavById(params: any): Observable<Nav> {
    return this.http.get<Nav>(`${this.baseUrl}/nav`,{params});
  }

  public addNav(params: any): Observable<Nav> {
    return this.http.post(`${this.baseUrl}/nav/create`, {params});
  }

  public updateNav(params: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/nav/update`, {params});
  }

  public deleteNumber(params: any): Observable<void> {
    return this.http.get<void>(`${this.baseUrl}/number/delete`,{params});
  }
}
