import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from 'src/app/core/config/constant';
import { Observable, catchError, of, tap } from 'rxjs';
import { Contact } from 'src/app/core/model/contact/contact';
import { Domain } from 'src/app/core/domain/domain';
import { Params } from '@angular/router';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private apiHelper: ApiHelper) {
  }

  listAllsizePage(params:any ):Observable<any>{
    return this.apiHelper.get( Constant.CONTACT.LIST_ALL_SIZE_PAGE , { params  }  ).pipe(
      tap(contact => console.log(`data_json = ${JSON.stringify(contact)}`)),
      catchError( () => of([]) )
       )
  }

  listAllContact():Observable<any>{
    return this.apiHelper.get(Constant.CONTACT.LIST_ALL_CONTACT)
  }
  AddContact(contactform : any):Observable<Object>{
    return this.apiHelper.post(Constant.CONTACT.ADD_CONTACT, contactform)
  }
  Delete(id:number):Observable<any>{
    return this.apiHelper.delete( Constant.CONTACT.DELETE + `/${id}` )
  }

  Contacted(id:number):Observable<Object>{
    return this.apiHelper.get( Constant.CONTACT.CONTACTED +`/${id}`)
  }
  NotContact(id:number):Observable<Object>{
    return this.apiHelper.get(Constant.CONTACT.NOTCONTACT + `/${id}`)
  }
  
  // getpending(params:any):Observable<any>{
  //   return this.apiHelper.get(Constant.CONTACT.GET_PENDING , {params})
  // }
  // getprocess(params:any):Observable<any>{
  //   return this.apiHelper.get(Constant.CONTACT.GET_PROCESS , {params})
  // }
  getpending():Observable<any>{
    return this.apiHelper.get(Constant.CONTACT.GET_PENDING  )
  }
  getprocess():Observable<any>{
    return this.apiHelper.get(Constant.CONTACT.GET_PROCESS )
  }

}
