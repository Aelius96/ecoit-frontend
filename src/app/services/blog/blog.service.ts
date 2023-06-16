import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constant } from "src/app/core/config/constant";
import { Observable } from "rxjs";
import { Blog } from "src/app/core/model/blog/blog";
import { Params } from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class BlogService{
    private baseUrl = `${Constant.BASE_URL}`;
    constructor(private http: HttpClient) { }

    listAllWithPage(params: any): Observable<any>{
      return this.http.get(`${this.baseUrl}/blog`,{params})
    }
    listAllWithPageHome(params: any): Observable<any>{
      return this.http.get(`${this.baseUrl}/home/blog`,{params})
    }
    public listAll(): Observable<Blog[]>{
      return this.http.get<Blog[]>(`${this.baseUrl}/home/blog/show`)
    }
public createBlog(blog: FormData): Observable<Object>{
    return this.http.post<Blog>(`${this.baseUrl}/blog/add`, blog);
  }

  public getBlogbyUrl(url:any):Observable<Blog>{
    return this.http.get<Blog>(`${this.baseUrl}/home/blog/${url}`);
  }
  
public getBlogsById(id:number): Observable<Blog>{
    return this.http.get<Blog>(`${this.baseUrl}/blog/${id}`);
}

public updateBlog(id: number, blog: FormData):Observable<Object>{
    return this.http.post<Blog>(`${this.baseUrl}/blog/update/${id}`,blog);
  }

  deleteBlog(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/blog/delete/${id}`);
  }

  
}