import { Injectable} from "@angular/core";
import {Constant} from "../../core/config/constant";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Domain} from "../../core/domain/domain";
import {Recruit} from "../../core/model/recruit/recruit";

@Injectable({
  providedIn: 'root'
})
export class RecruitService{
  private baseUrl = `${Constant.BASE_URL}/recruit`

  constructor(private http:HttpClient) {
  }

  public listAll(): Observable<Recruit[]>{
    return this.http.get<Recruit[]>(`${this.baseUrl}`)
  }

  public addRecruitNews(recruit: FormData): Observable<Object>{
    return this.http.post<Recruit>(`${this.baseUrl}/add`,recruit)
  }
  public getRecruitId(id: number): Observable<Recruit>{
    return this.http.get<Recruit>(`${this.baseUrl}/${id}`);
  }
  public updateRecruitNews(id: number,recruit: FormData): Observable<Object>{
    return this.http.post<Recruit>(`${this.baseUrl}/update/${id}`,recruit)
  }

  deleteRecruitNews(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }
}
