import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../../core/config/constant";
import {Observable} from "rxjs";
import {Customer} from "../../core/model/customer/customer";
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl =`${Constant.BASE_URL}`;
  constructor(private http:HttpClient) {}

  listAllWithPage(params:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/customer`, {params})
  }

  public getAllCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseUrl}/home/customer`)
  }

  public addCustomer(formData: FormData): Observable<Object>{
    return this.http.post(`${this.baseUrl}/customer/add`,formData);
  }

  updateCustomer(id: number, formData: FormData):Observable<Object>{
    return this.http.post(`${this.baseUrl}/customer/update/${id}`,formData);
  }

  deleteCustomer(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/customer/delete/${id}`);
  }
  getCusById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/customer/${id}`);
  }
  getCusByUrl(url: string): Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/customer/home/${url}`);
  }
}
