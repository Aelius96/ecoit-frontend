import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Address } from 'src/app/core/model/address/address';
import {ApiHelper} from "../../core/rest-api/api-helper";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(  private apiHelper: ApiHelper) { }

  createAddress( address : Address ):Observable<any>{
    return this.apiHelper.post(Constant.ADDRESS.CREATE,address);
  }

  ListAll():Observable<Address[]>{
    return this.apiHelper.get(Constant.ADDRESS.LIST);
    
  }

  updateAddress( id:number,  address: Address): Observable<Object>{
    return this.apiHelper.post(Constant.ADDRESS.UPDATE +`/${id}`, address);
  }
  getById(id: number): Observable<any>{
    return this.apiHelper.get(Constant.ADDRESS.LIST+`/${id}`)
  }

  delete(id:number):Observable<Object>{
    return this.apiHelper.post(Constant.ADDRESS.DELETE+`/${id}`)
  }
}
