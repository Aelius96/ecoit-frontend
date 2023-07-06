import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { Comment } from 'src/app/core/model/comment/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = `${Constant.BASE_URL}`;
  constructor( private http: HttpClient ) { }

  getCommentbyId(params: any):Observable<any>{
    return this.http.get(`${this.baseUrl}/comment/get` , {params})
  }
  getListCommentHome():Observable<any>{
    return this.http.get(`${this.baseUrl}/comment/home`);
  }
  getListAll():Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.baseUrl}/comment/all`)
  }
  DisableComment():Observable<any>{
    return this.http.get(`${this.baseUrl}/comment/disable`)
  }
  creatComment(creatcomment: any):Observable<Object>{
    return this.http.post(`${this.baseUrl}/comment/create` , creatcomment)
  }

  //  public addNav(nav: Nav): Observable<Nav> {
  //   return this.http.post<Nav>(`${this.baseUrl}/nav/add`,nav);
  // }

  deleteComment(){
    return this.http.get(`${this.baseUrl}/comment/delete`)
  }
}
