import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {HttpClient} from "@angular/common/http";
import {Params} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseUrl = `${Constant.BASE_URL}/s/file`
  constructor(private http:HttpClient) { }
  downloadFile(file: File): Observable<Object>{
    return this.http.post(`${this.baseUrl}/downloadFile`,file, {observe: "response", responseType: "blob"});
  }

  deleteFile(id:number ): Observable<Object>{
    return this.http.post(`${this.baseUrl}/deleteFile`, id);
  }

  getFileById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllImage(): Observable<any>{
    return this.http.get(`${this.baseUrl}/image/all`);
  }

  updateImage(file: File): Observable<Object>{
    return this.http.post(`${this.baseUrl}/image/update`, file);
  }

  getlistallwithpage(params: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/image`, {params});
  }

}
