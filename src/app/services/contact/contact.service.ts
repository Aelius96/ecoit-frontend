import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from 'src/app/core/config/constant';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/core/model/contact/contact';
import { Domain } from 'src/app/core/domain/domain';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.CONTACT}` 
  constructor(private http: HttpClient) {
  }

  listAllsizePage(params:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.domain}/number` , {params})
  }
  
  listAllContact():Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.baseUrl}/${this.domain}/users`)
  }
  AddContact(contactform : any):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/add` , contactform)
  }
  Delete(id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}/${this.domain}/delete/${id}` )
  }

  Contacted(id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}/${this.domain}/show/${id}`)
  }
  NotContact(id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}/${this.domain}/hide/${id}`)
  }
  
}
