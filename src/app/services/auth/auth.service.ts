import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../core/model/user/user";
import {FormGroup} from "@angular/forms";
import {Constant} from "../../core/config/constant";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL =`${Constant.BASE_URL}/auth`;
  constructor(private httpclient: HttpClient) { }

  login(user: User): Observable<User> {
    return this.httpclient.post<User>(`${this.baseURL}/admin/login`, user);
  }

  register(user: User): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}/register`, user);
  }

  loginUser(user: User): Observable<User> {
    return this.httpclient.post<User>(`${this.baseURL}/login`, user);
  }
}
