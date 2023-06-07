import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private baseUrl = `${Constant.BASE_URL}`;

  constructor(private http: HttpClient) { }

  filterList(param: HttpParams): Observable<any>{
    return this.http.get(`${this.baseUrl}/banner`,{params: param})
  }

  addBanner(banner: FormData): Observable<any>{
    return this.http.post(`${this.baseUrl}/banner`, banner);
  }
}
