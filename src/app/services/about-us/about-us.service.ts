import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {Domain} from "../../core/domain/domain";
import {HttpClient} from "@angular/common/http";
import {Observable, catchError, of, tap} from "rxjs";
import { About } from 'src/app/core/model/about/about';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.ABOUT}`;
  constructor(private apiHelper:ApiHelper ) { }


  createInformation(about: About){
      return this.apiHelper.post(Constant.ABOUT.CREATE , about)
  }

  getByIdAbout(id: number):Observable<About[]>{
      return this.apiHelper.get(Constant.ABOUT.GETID+`/${id}`)
  }

 getAllInformation():Observable<About>{
    return this.apiHelper.get(Constant.ABOUT.LIST)
 }

 getAllInforHome():Observable<About[]>{
  return this.apiHelper.get(Constant.ABOUT.LIST).pipe(
    tap(res=> console.log('about' + JSON.stringify(res) )),
    catchError( () => of([]) )
  )
 }
}
