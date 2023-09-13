import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constant} from "../config/constant";

@Injectable({
  providedIn: 'root'
})
export class ApiHelper{

  constructor(private http:HttpClient) {
   }
  getEndpointUrl(endpoint: string){
    return Constant.BASE_URL+'/'+endpoint;
  }

  get(endpoint: string, option?:any): Observable<any>{
    return this.http.get(this.getEndpointUrl(endpoint),option);
  }

  post(endpoint: string,body?: any, option?:any): Observable<any>{
    return this.http.post(this.getEndpointUrl(endpoint),body,option);
  }
}
