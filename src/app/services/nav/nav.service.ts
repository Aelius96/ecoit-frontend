import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Nav} from "../../core/model/nav/nav";
import {Constant} from "../../core/config/constant";
import {Number} from "../../modules/typical/number/number";
import {Params} from "@angular/router";
import {Obj} from "@popperjs/core";

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private baseUrl = `${Constant.BASE_URL}`
  constructor(private http: HttpClient) { }

  listAllWithPage(params: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/nav`,{params})
  }

  listAll(): Observable<Nav[]>{
    return this.http.get<Nav[]>(`${this.baseUrl}/nav`)
  }

  public getNavById(id: number): Observable<Nav> {
    return this.http.get<Nav>(`${this.baseUrl}/nav/${id}`);
  }

  public addNav(nav: Nav): Observable<Nav> {
    return this.http.post<Nav>(`${this.baseUrl}/nav/add`,nav);
  }

  public updateNav(id: number,nav: Nav): Observable<Nav> {
    return this.http.post<Nav>(`${this.baseUrl}/nav/update/${id}`, nav);
  }

  public deleteNav(id: number): Observable<void> {
    return this.http.get<void>(`${this.baseUrl}/nav/delete/${id}`);
  }


}
