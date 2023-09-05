import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../core/model/user/user";
import {Constant} from "../../core/config/constant";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(  private apiHelper: ApiHelper) { }
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
