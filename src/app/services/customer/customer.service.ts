import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../../core/config/constant";
import {Observable} from "rxjs";
import {Customer} from "../../core/model/customer/customer";
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import {Domain} from "../../core/domain/domain";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl =`${Constant.BASE_URL}`;
  private domain = `${Domain.CUSTOMER}`;
  constructor(private http:HttpClient) {}

  listAllWithPage(params:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}`, {params})
  }
  public getAllCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseUrl}/${this.domain}/home`)
  }

  public addCustomer(formData: FormData): Observable<Object>{
    return this.http.post(this.baseUrl+'/' + this.domain +'/add' , formData);
  }

  updateCustomer(id: number, formData: FormData):Observable<Object>{
    return this.http.post( this.baseUrl + '/' + this.domain + '/update/' + id,formData);
  }

  deleteCustomer(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${this.domain}/delete/${id}`);
  }
  getCusById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/${this.domain}/${id}`);
  }
  getCusByUrl(url: string): Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/${this.domain}/home/${url}`);
  }
  
}
