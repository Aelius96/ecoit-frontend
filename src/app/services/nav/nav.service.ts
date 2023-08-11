import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Nav} from "../../core/model/nav/nav";
import {Constant} from "../../core/config/constant";
import {Number} from "../../modules/typical/number/number";
import {Params} from "@angular/router";
import {Obj} from "@popperjs/core";
import { Domain } from 'src/app/core/domain/domain';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private baseUrl = `${Constant.BASE_URL}`
  private domain = `${Domain.NAV}`
  constructor(private http: HttpClient) { }

  listAllWithPage(params: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}`,{params})
  }

  listAll(): Observable<Nav[]>{
    return this.http.get<Nav[]>(`${this.baseUrl}/${this.domain}`)
  }

  public getNavById(id: number): Observable<Nav> {
    return this.http.get<Nav>(`${this.baseUrl}/${this.domain}/${id}`);
  }

  public addNav(nav: Nav): Observable<Nav> {
    return this.http.post<Nav>(`${this.baseUrl}/${this.domain}/add`,nav);
  }

  public updateNav(id: number,nav: Nav): Observable<Nav> {
    return this.http.post<Nav>(`${this.baseUrl}/${this.domain}/update/${id}`, nav);
  }

  public deleteNav(id: number): Observable<Object> {
    return this.http.get<Object>(`${this.baseUrl}/${this.domain}/delete/${id}`);
  }
  public deleteNavAll(formData: FormData): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${this.domain}/deleteAll`,formData);
  }

}
