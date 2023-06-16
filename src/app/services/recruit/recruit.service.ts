import { Injectable} from "@angular/core";
import {Constant} from "../../core/config/constant";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recruit} from "../../core/model/recruit/recruit";

@Injectable({
  providedIn: 'root'
})
export class RecruitService{
  private baseUrl = `${Constant.BASE_URL}`

  constructor(private http:HttpClient) {
  }

  listAllWithPage(params: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/recruit`,{params})
  }
  listAllWithPageHome(params: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/home/recruit`,{params})
  }
  public listAll(): Observable<Recruit[]>{
    return this.http.get<Recruit[]>(`${this.baseUrl}/home/recruit/show`)
  }

  public addRecruitNews(recruit: FormData): Observable<Object>{
    return this.http.post<Recruit>(`${this.baseUrl}/recruit/add`,recruit)
  }
  // public getNewsByUrl(url: any): Observable<News>{
  //   return this.http.get<News>(`${this.baseUrl}/home/news/${url}`);
  // }
  public getRecruitUrl(url:any):Observable<Recruit>{
    return this.http.get<Recruit>(`${this.baseUrl}/home/recruit/${url}`);
  }
  public getRecruitId(id: number): Observable<Recruit>{
    return this.http.get<Recruit>(`${this.baseUrl}/recruit/${id}`);
  }
  public updateRecruitNews(id: number,recruit: FormData): Observable<Object>{
    return this.http.post<Recruit>(`${this.baseUrl}/recruit/update/${id}`,recruit)
  }

  deleteRecruitNews(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/recruit/delete/${id}`);
  }
}
