import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../core/model/user/user";
import {FormGroup} from "@angular/forms";
import {Constant} from "../../core/config/constant";
import {Domain} from "../../core/domain/domain";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL =`${Constant.BASE_URL}`;
  private domain  = `${Domain.AUTH}`
  constructor(private httpclient: HttpClient) { }
  //http:172.16.10.161/auth/admin/login
  login(user: User): Observable<User> {
    return this.httpclient.post<User>(`${this.baseURL}/${this.domain}/admin/login`, user);
  }

  register(user: User): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}/${this.domain}/register`, user);
  }

  loginUser(user: User): Observable<User> {
    return this.httpclient.post<User>(`${this.baseURL}/${this.domain}/login`, user);
  }
}
