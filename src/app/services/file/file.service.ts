import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {HttpClient} from "@angular/common/http";
import {Params} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseUrl = `${Constant.BASE_URL}`
  constructor(private http:HttpClient) { }
  // downloadFile( id:number): Observable<Object>{
  //   return this.http.post(`${this.baseUrl}/image/download/${id}`, {observe: "response", responseType: "blob"});
  // }

  downloadFile(file: File): Observable<Object>{
    return this.http.post(`${this.baseUrl}/s/file/downloadFile`,file, {observe: "response", responseType: "blob"});
  }

  addImage(formData: FormData): Observable<any>{
    return this.http.post(`${this.baseUrl}/s/file/add`,formData);

  }

  deleteFile(file:File ){
    return this.http.post(`${this.baseUrl}/s/file/deleteFile`, file);
  }

  getFileById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/s/file/${id}`);
  }

  getAllImage(): Observable<any>{
    return this.http.get(`${this.baseUrl}/s/file/image/all`);
  }

  updateImage(file: File): Observable<Object>{
    return this.http.post(`${this.baseUrl}/s/file/image/update`, file);
  }

  getlistallwithpage(paramsQuery: Params): Observable<any>{
    return this.http.get(`${this.baseUrl}/s/file/image`, {params: paramsQuery});
  }

  getListAll():Observable<any>{
    return this.http.get(`${this.baseUrl}/s/file/image/all`)
  }

}
