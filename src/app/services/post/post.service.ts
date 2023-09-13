import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constant} from "../../core/config/constant";
import {Observable} from "rxjs";
import {Domain} from "../../core/domain/domain";
import {Post} from "../../core/model/post/post";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private apiHelper: ApiHelper) {
  }

  listAllWithPage(params: HttpParams): Observable<any>{
    return this.apiHelper.get( Constant.POST.LIST_ALL_WITH_PAGE ,{params})
  }
  listAllWithPageHome(params: HttpParams): Observable<any>{
    return this.apiHelper.get(Constant.POST.LIST_ALL_WITH_PAGE_HOME,{params})
  }

  listAllWithPageByNews(params: HttpParams): Observable<any>{
    return this.apiHelper.get( Constant.POST.LIST_ALL_WITH_PAGE_BY_NEWS ,{params})
  }

  listAllWithPageByRecruit(params: HttpParams): Observable<any>{
    return this.apiHelper.get( Constant.POST.LIST_ALL_WITH_PAGE_BY_RECRUIT ,{params})
  }

  public search(params: HttpParams): Observable<any>{
    return this.apiHelper.get( Constant.POST.SEARCH ,{params})
  }

  public getPostByUrl(url: any): Observable<Post>{
    return this.apiHelper.get( Constant.POST.GET_POST_BY_URL + `/${url}`);
  }

  public createPost(post: FormData): Observable<Object>{
    return this.apiHelper.post( Constant.POST.CREATE_POST , post);
  }

  public getPostById(id: number): Observable<Post>{
    return this.apiHelper.get( Constant.POST.GET_POST_BY_ID +`/${id}`);
  }

  updatePost(id: number, post: FormData):Observable<Object>{
    return this.apiHelper.post( Constant.POST.UPDATE_POST + `/${id}`,post);
  }

  deletePost(id: number): Observable<Object>{
    return this.apiHelper.post( Constant.POST.DELETE_POST + `/${id}`);
  }

  getImageByPostId(id: number):Observable<Post>{
    return this.apiHelper.get( Constant.POST.GET_IMAGE_BY_POST_ID +`/${id}`);
  }
}
