import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {Observable} from "rxjs";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';
import {Customer} from "../../core/model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private apiHelper : ApiHelper , ) {}

  listAllWithPage(params:any):Observable<any>{
    return this.apiHelper.get( Constant.CUSTOMER.LIST_ALL_WITH_PAGE, {params})
  }
  public getAllCustomer():Observable<any>{
    return this.apiHelper.get(Constant.CUSTOMER.GET_ALL_CUSTOMER)
  }

  public addCustomer(formData: FormData): Observable<Object>{
    return this.apiHelper.post(Constant.CUSTOMER.ADD_CUSTOMER , formData);
  }

  public addCustomerDTO(formData: FormData): Observable<Object>{
    return this.apiHelper.post(Constant.CUSTOMER.ADDDTO_CUSTOMER , formData);
  }

  updateCustomer(id: number, formData: FormData):Observable<Object>{
    return this.apiHelper.post(Constant.CUSTOMER.UPDATE_CUSTOMER+`/${id}`,formData);
  }

  deleteCustomer(id: number): Observable<Object>{
    return this.apiHelper.delete( Constant.CUSTOMER.DELETE_CUSTOMER + `/${id}`);
  }
  getCusById(id: number): Observable<any>{
    return this.apiHelper.get( Constant.CUSTOMER.GET_CUS_BY_ID +`/${id}`);
  }
  getCusByUrl(url: string): Observable<any>{
    return this.apiHelper.get( Constant.CUSTOMER.GET_CUS_BY_URL + `/${url}`);
  }

}
