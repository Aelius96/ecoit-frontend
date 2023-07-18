import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, ObservedValueOf} from "rxjs";
import {User} from "../../core/model/user/user";
import {Constant} from "../../core/config/constant";
import {Domain} from "../../core/domain/domain";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl =`${Constant.BASE_URL}/user`
  private domain = `${Domain.USER}`;
  constructor(private http:HttpClient) { }

  getListAllwithpageUser(params:any):Observable<any>{
    return this.http.get(`${this.baseUrl}` , {params})
  }

  // public getAllUser():Observable<User[]>{
  //   return this.http.get<User[]>(`${this.baseUrl}`);
  // }

  public getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${this.domain}/${id}`);
  }

  updateUser(id: number, formData: FormData):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/update/${id}`,formData);
  }

  public deleteUser(id: number): Observable<void> {
    return this.http.get<void>(`${this.baseUrl}/${this.domain}/delete/${id}`);
  }

  changePassword(id: number):Observable<any>{
    return this.http.post(`${this.baseUrl}/${this.domain}/changePassword`,id);
  }
}
