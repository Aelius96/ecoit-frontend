import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constant} from "../../core/config/constant";
import {Observable} from "rxjs";
import {Domain} from "../../core/domain/domain";
import {Post} from "../../core/model/post/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.POST}`

  constructor(private http: HttpClient) {
  }

  listAllWithPage(params: HttpParams): Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.domain}`,{params})
  }
  listAllWithPageHome(params: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/home/${this.domain}`,{params})
  }
  // public listAll(): Observable<Post[]>{
  //   return this.http.get<Post[]>(`${this.baseUrl}/home/${this.domain}/show`);
  // }
  public listAll(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseUrl}/${this.domain}/list`);
  }


  public getPostByUrl(url: any): Observable<Post>{
    return this.http.get<Post>(`${this.baseUrl}/home/${this.domain}/${url}`);
  }

  createPost(post: FormData): Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/add`, post);
  }

  public getPostById(id: number): Observable<Post>{
    return this.http.get<Post>(`${this.baseUrl}/${this.domain}/${id}`);
  }

  updatePost(id: number, post: FormData):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${this.domain}/update/${id}`,post);
  }

  deletePost(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${this.domain}/delete/${id}`);
  }
}
