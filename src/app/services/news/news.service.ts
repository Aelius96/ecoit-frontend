import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {News} from "../../core/model/news/news";
import {Obj} from "@popperjs/core";
import {Constant} from "../../core/config/constant";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

private baseUrl = `${Constant.BASE_URL}`;

  constructor(private http: HttpClient) {
  }

  listAllWithPage(params: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/news`,{params})
  }
  listAllWithPageHome(params: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/home/news`,{params})
  }
  public listAll(): Observable<News[]>{
    return this.http.get<News[]>(`${this.baseUrl}/home/news/show`);
  }

  public getNewsByUrl(url: any): Observable<News>{
    return this.http.get<News>(`${this.baseUrl}/home/news/${url}`);
  }

  createNews(news: FormData): Observable<Object>{
    return this.http.post(`${this.baseUrl}/news/add`, news);
  }

  public getNewsById(id: number): Observable<News>{
    return this.http.get<News>(`${this.baseUrl}/news/${id}`);
  }

  updateNews(id: number, news: FormData):Observable<Object>{
    return this.http.post(`${this.baseUrl}/news/edit/${id}`,news);
  }

  deleteNews(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/news/delete/${id}`);
  }
}
