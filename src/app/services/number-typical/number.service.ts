import {Inject, Injectable} from "@angular/core";
import {Constant} from "../../core/config/constant";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Number} from "../../modules/typical/number/number";

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  private baseUrl = `${Constant.BASE_URL}`;

  constructor(private httpclient: HttpClient) {
  }

  getListAllPage(params:any):Observable<any>{
    return this.httpclient.get(`${this.baseUrl}/number`, {params})
  }

  getAllNumber(): Observable<Number[]>{
    return this.httpclient.get<Number[]>(`${this.baseUrl}/number`);
  }

  public getNumberById(id: number): Observable<Number> {
    return this.httpclient.get<Number>(`${this.baseUrl}/number/${id}`);
  }

  public addNumber(number: Number): Observable<Object> {
    return this.httpclient.post(`${this.baseUrl}/number/add`, number);
  }

  public editNumber(number:Number, id:number): Observable<Object> {
    return this.httpclient.post(`${this.baseUrl}/number/edit/${id}`, number);
  }

  public deleteNumber(id: number): Observable<void> {
    return this.httpclient.get<void>(`${this.baseUrl}/number/delete/${id}`);
  }
}
