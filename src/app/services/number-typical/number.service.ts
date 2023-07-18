import {Inject, Injectable} from "@angular/core";
import {Constant} from "../../core/config/constant";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Number} from "../../modules/typical/number/number";
import {Domain} from "../../core/domain/domain";

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.NUMBER}`;


  constructor(private httpclient: HttpClient) {
  }

  getListAllPage(params:any):Observable<any>{
    return this.httpclient.get(`${this.baseUrl}/${this.domain}`, {params})
  }

  getAllNumber(): Observable<Number[]>{
    return this.httpclient.get<Number[]>(`${this.baseUrl}/${this.domain}/home`);
  }

  public getNumberById(id: number): Observable<Number> {
    return this.httpclient.get<Number>(`${this.baseUrl}/${this.domain}/${id}`);
  }

  public addNumber(number: Number): Observable<Object> {
    return this.httpclient.post(`${this.baseUrl}/${this.domain}/add`, number);
  }

  public editNumber(number:Number, id:number): Observable<Object> {
    return this.httpclient.post(`${this.baseUrl}/${this.domain}/update/${id}`, number);
  }

  public deleteNumber(id: number): Observable<void> {
    return this.httpclient.get<void>(`${this.baseUrl}/${this.domain}/delete/${id}`);
  }
}
