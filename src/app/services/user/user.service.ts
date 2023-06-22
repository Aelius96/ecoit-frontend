import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, ObservedValueOf} from "rxjs";
import {User} from "../../core/model/user/user";
import {Constant} from "../../core/config/constant";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl =`${Constant.BASE_URL}/user`
  constructor(private http:HttpClient) { }
   
  getListAllwithpageUser(params:any):Observable<any>{
    return this.http.get(`${this.baseUrl}` , {params})
  }

  // public getAllUser():Observable<User[]>{
  //   return this.http.get<User[]>(`${this.baseUrl}`);
  // }

  public getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, formData: FormData):Observable<Object>{
    return this.http.post(`${this.baseUrl}/update/${id}`,formData);
  }

  public deleteUser(id: number): Observable<void> {
    return this.http.get<void>(`${this.baseUrl}/delete/${id}`);
  }

}
