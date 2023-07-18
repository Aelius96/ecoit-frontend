import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {Domain} from "../../core/domain/domain";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.ABOUT}`;
  constructor(private http:HttpClient) { }

  createInformation(formData: any):Observable<any>{
    return this.http.post(`${this.baseUrl}/${this.domain}/create`,formData);
  }
}
