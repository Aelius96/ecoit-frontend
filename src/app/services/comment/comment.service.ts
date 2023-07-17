import { HttpClient, HttpParams } from '@angular/common/http';
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

  // getCommentChildById( params: any):Observable<any>{
  //   return this.http.get(`${this.baseUrl}/comment/get` , {params})
  // }

  getCommentChildByParent():Observable<any>{
    return this.http.get(`${this.baseUrl}/comment/get` )
  }
  getListCommentHome():Observable<any>{
    return this.http.get(`${this.baseUrl}/comment/home`);
  }
  getListAll():Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.baseUrl}/comment/all`)
  }

  DisableComment(id : number){
    return this.http.get(`${this.baseUrl}/comment/disable/${id}`)
  }
  creatComment(creatcomment: any):Observable<Object>{
    return this.http.post(`${this.baseUrl}/comment/create` , creatcomment)
  }
  updateComment(id:number, updateComment: any):Observable<Object>{
    return this.http.post(`${this.baseUrl}/comment/update/{id}` , updateComment)
  }

  getCommentByPostId(postId : number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/comment/test?postId=${postId}`)
  }

  //  public addNav(nav: Nav): Observable<Nav> {
  //   return this.http.post<Nav>(`${this.baseUrl}/nav/add`,nav);
  // }


  deleteComment(id:any){
    return this.http.get(`${this.baseUrl}/comment/delete/` , id )
  }
}
