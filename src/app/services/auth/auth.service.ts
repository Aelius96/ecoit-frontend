import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../core/model/user/user";
import {FormGroup} from "@angular/forms";
import {Constant} from "../../core/config/constant";
import {Domain} from "../../core/domain/domain";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL =`${Constant.BASE_URL}`;
  private domain  = `${Domain.AUTH}`
  constructor(  private apiHelper: ApiHelper) { }
  //http:172.16.10.161/auth/admin/login
  login(user: User): Observable<User> {
    return this.apiHelper.post(Constant.AUTH.LOGIN, user);
  }

  register(user: User): Observable<Object>{
    return this.apiHelper.post(Constant.AUTH.REGISTER, user);
  }

  loginUser(user: User): Observable<User> {
    return this.apiHelper.post(Constant.AUTH.LOGIN_USER, user);
  }
}
