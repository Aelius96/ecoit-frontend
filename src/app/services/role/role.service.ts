import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../../core/model/role/role";
import {User} from "../../core/model/user/user";
import {Constant} from "../../core/config/constant";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = `${Constant.BASE_URL}`

  constructor(private http:HttpClient) {}

  getRoleById(id:number):Observable<Role>{
    return this.http.get<Role>(`${this.baseUrl}/role/${id}`);
  }

  listRole():Observable<Role[]>{
    return this.http.get<Role[]>(`${this.baseUrl}/role`);
  }
}
