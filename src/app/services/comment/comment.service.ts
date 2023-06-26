import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = `${Constant.BASE_URL}/comment`;
  constructor( private http: HttpClient ) { }

  getCommentbyId(params: any):Observable<any>{
    return this.http.get(`${this.baseUrl}/get` , {params})
  }
  getListCommentHome():Observable<any>{
    return this.http.get(`${this.baseUrl}/home`);
  }
  getListAll():Observable<any>{
    return this.http.get(`${this.baseUrl}/all`)
  }
  DisableComment():Observable<any>{
    return this.http.get(`${this.baseUrl}/disable`)
  }
  creatComment(creatcomment: any){
    return this.http.post(`${this.baseUrl}/create` , creatcomment)
  }

  deleteComment():Observable<object>{
    return this.http.get(`${this.baseUrl}/delete`)
  }
}
