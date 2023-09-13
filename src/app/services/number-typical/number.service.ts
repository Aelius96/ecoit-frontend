import {Inject, Injectable} from "@angular/core";
import {Constant} from "../../core/config/constant";
import {HttpClient} from "@angular/common/http";
import { Observable, Cons } from 'rxjs';
import { Number} from "../../modules/typical/number/number";
import {Domain} from "../../core/domain/domain";
import { ApiHelper } from "src/app/core/rest-api/api-helper";

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  JSON_PATH = '../../assets/json/'
  constructor(private apiHelper: ApiHelper, private http : HttpClient) { }

  getListAllPage(params:any):Observable<any>{
    return this.apiHelper.get( Constant.NUMBER_TYPICAL.GET_LIST_ALL_PAGE , {params})
  }

  getAllNumber(): Observable<Number[]>{
    return this.apiHelper.get(Constant.NUMBER_TYPICAL.GET_ALL_NUMBER);
  }

  public getNumberById(id: number): Observable<Number> {
    return this.apiHelper.get( Constant.NUMBER_TYPICAL.GET_NUMBER_BY_ID + `/${id}`);
  }

  public addNumber(number: Number): Observable<Object> {
    return this.apiHelper.post( Constant.NUMBER_TYPICAL.ADD_NUMBER, number);
  }

  public editNumber(number:Number, id:number): Observable<Object> {
    return this.apiHelper.post(Constant.NUMBER_TYPICAL.EDIT_NUMBER +`/${id}`, number);
  }

  public deleteNumber(id: number): Observable<any> {
    return this.apiHelper.post(Constant.NUMBER_TYPICAL.DELETE_NUMBER +`/${id}`);
  }
  getListIconJson(fileName : string) : Observable<any> {
    return this.http.get(this.JSON_PATH + fileName)
  }
}
