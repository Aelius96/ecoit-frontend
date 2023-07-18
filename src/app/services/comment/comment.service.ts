import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { Comment } from 'src/app/core/model/comment/comment';
import {Domain} from "../../core/domain/domain";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.COMMENT}`

  constructor( private http: HttpClient ) { }

  // getCommentChildById( params: any):Observable<any>{
  //   return this.http.get(`${this.baseUrl}/comment/get` , {params})
  // }

  getCommentChildByParent():Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}/get` )
  }

  getParentCommentActive():Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.baseUrl}/${this.domain}/parent` )
  }

  getListCommentHome():Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}/home`);
  }
  getListAll():Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.baseUrl}/${this.domain}/all`)
  }

  DisableComment(id : number){
    return this.http.get(`${this.baseUrl}/${this.domain}/disable/${id}`)
  }
  creatComment(creatcomment: any):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/create` , creatcomment)
  }
  updateComment(id:number, updateComment: any):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/update/{id}` , updateComment)
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
