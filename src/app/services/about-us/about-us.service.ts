import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {Domain} from "../../core/domain/domain";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { About } from 'src/app/core/model/about/about';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.ABOUT}`;
  constructor(private http:HttpClient) { }

  createInformation(aboutform: About):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/create`, aboutform);
  }

  getInformation(id:number):Observable<About[]>{
    return this.http.get<About[]>(`${this.baseUrl}/${this.domain}/get?id=${id}`)
  }
 UpdateInformation( value: About ):Observable<Object>{
  return this.http.post(this.baseUrl + this.domain + '/update' , value )
 }
 getAllInformation():Observable<About>{
    return this.http.get<About>(`${this.baseUrl}/${this.domain}`)
 }

}
