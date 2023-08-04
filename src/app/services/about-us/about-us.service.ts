import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {Domain} from "../../core/domain/domain";
import {HttpClient} from "@angular/common/http";
import {Observable, catchError, of, tap} from "rxjs";
import { About } from 'src/app/core/model/about/about';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.ABOUT}`;
  constructor(private http:HttpClient) { }

  createInformation(aboutform: About):Observable<Object>{
    return this.http.post( this.baseUrl +'/'+this.domain+'/create' , aboutform);
  }

 getAllInformation():Observable<About>{
    return this.http.get<About>(this.baseUrl + '/' + this.domain )
 }

 getAllInforHome():Observable<About[]>{
  return this.http.get<About[]>(`${this.baseUrl}/${this.domain}`).pipe(
    tap(res=> console.log('about' + JSON.stringify(res) )),
    catchError( () => of([]) )
  )
 }
}
