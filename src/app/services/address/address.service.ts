import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Address } from 'src/app/core/model/address/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = Constant.BASE_URL;
  private domain = Domain.ADDRESS;
  constructor(  private http : HttpClient ) { }

  createAddress( address : Address  ):Observable<any>{
    return this.http.post<any>( this.baseUrl +'/' + this.domain +'/add' , address)
  }

  ListAll():Observable<Address[]>{
    return this.http.get<Address[]>( this.baseUrl + '/' + this.domain ).pipe(
      tap(res=> console.log('address' + JSON.stringify(res) )),
      catchError( () => of([]) )
    )
  }

}
