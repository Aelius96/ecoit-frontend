import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {HttpClient} from "@angular/common/http";
import {Params} from "@angular/router";
import {Observable} from "rxjs";
import {Domain} from "../../core/domain/domain";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private apiHelper :ApiHelper) { }

  downloadFile(file: File): Observable<Object>{
    return this.apiHelper.post(Constant.ALBUMS.DOWNLOAD_FILE ,file, {observe: "response", responseType: "blob"});
  }

  addImage(formData: FormData): Observable<any>{
    return this.apiHelper.post( Constant.ALBUMS.ADD_IMAGE ,formData);

  }

  deleteFile(file:File ){
    return this.apiHelper.delete( Constant.ALBUMS.DELETE_FILE , file);
  }

  getFileById(id: number): Observable<any>{
    return this.apiHelper.get(Constant.ALBUMS.GET_FILE_BY_ID + `/${id}`);
  }

  getAllImage(): Observable<any>{
    return this.apiHelper.get(Constant.ALBUMS.GET_ALL_IMAGE);
  }

  updateImage(file: File): Observable<Object>{
    return this.apiHelper.post( Constant.ALBUMS.UPDATE_IMAGE , file);
  }

  getlistallwithpage(paramsQuery: Params): Observable<any>{
    return this.apiHelper.get( Constant.ALBUMS.GET_LISTALL_WITH_PAGE , {params: paramsQuery});
  }

  getListAll():Observable<any>{
    return this.apiHelper.get(Constant.ALBUMS.GET_LIST_ALL)
  }

}
