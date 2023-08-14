import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Cons } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { Comment } from 'src/app/core/model/comment/comment';
import {Domain} from "../../core/domain/domain";
import { ParseError } from '@angular/compiler';
import { Params } from '@angular/router';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.COMMENT}`

  constructor( private apiHelper: ApiHelper ) { }

  getListCommentwithPageAdmin(paramsQuery : Params):Observable<any>{
    return this.apiHelper.get( Constant.COMMENT.GET_LIST_COMMENT_WITH_PAGE_ADMIN , {params:paramsQuery})
  }

  getCommentChildByParent():Observable<any>{
    return this.apiHelper.get(Constant.COMMENT.GET_COMMENT_CHILD_BY_PARENT)
  }

  getCommentChildByParentAdmin():Observable<any>{
    return this.apiHelper.get(Constant.COMMENT.GET_COMMENT_CHILD_BY_PARENT_ADMIN)
  }

  getParentCommentActive():Observable<Comment[]>{
    return this.apiHelper.get(Constant.COMMENT.GET_PARENT_COMMENT_ACTIVE)
  }
  getParentCmtAdmin():Observable<Comment[]>{
    return this.apiHelper.get(Constant.COMMENT.GET_PARENTCMT_ADMIN)
  }

  getListCommentHome():Observable<any>{
   return this.apiHelper.get(Constant.COMMENT.GET_LIST_COMMENT_HOME)
  }
  getListAll():Observable<Comment[]>{
    return this.apiHelper.get(Constant.COMMENT.GET_LIST_ALL)
  }

  DisableComment(id : number){
    return this.apiHelper.get(Constant.COMMENT.DISABLE_COMMENT + `/${id}`)
  }
  EnableComment(id : number){
    return this.apiHelper.get( Constant.COMMENT.ENABLE_COMMENT + `/${id}`)
  }
  creatComment(creatcomment: any):Observable<Object>{
    return this.apiHelper.post( Constant.COMMENT.CREAT_COMMENT  , creatcomment)
  }
  updateComment(id:number , comment:Comment):Observable<Object>{
    return this.apiHelper.post(  Constant.COMMENT.UPDATE_COMMENT + `/${id}` , comment )
  }

  getCommentByPostId(postId : number):Observable<any>{
    return this.apiHelper.get( Constant.COMMENT.GET_COMMENT_BY_POST_ID + `/test?postId=${postId}`)
  }

  deleteComment(id:number){
  return this.apiHelper.delete(Constant.COMMENT.DELETE_COMMENT + `/${id}` )  
  }
  
}
