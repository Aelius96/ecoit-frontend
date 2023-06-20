import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../core/model/user/user";
import {Constant} from "../../core/config/constant";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl =`${Constant.BASE_URL}/user`
  constructor(private http:HttpClient) { }

  public getAllUser():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  public getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  public updateUser(id:number, user: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/update/${id}`,user)
  }

  public deleteUser(id: number): Observable<void> {
    return this.http.get<void>(`${this.baseUrl}/delete/${id}`);
  }

}
