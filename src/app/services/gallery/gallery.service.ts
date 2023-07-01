import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Gallery } from 'src/app/core/model/gallery/gallery';
import { Observable } from 'rxjs';
import { Domain } from 'src/app/core/domain/domain';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor ( private http : HttpClient) {  }
  private baseURL = `${Constant.BASE_URL}`;
  private domain = `${Domain.GALLERY}`

  getAllListChangePage(param: Params):Observable<any>{
    return this.http.get(`${this.baseURL}/${this.domain}`, {params: param});
  }

  getListAll():Observable<Gallery[]>{
    return this.http.get<Gallery[]>(`${this.baseURL}/${this.domain}/show`);
  }
addimageById(id:number):Observable<Gallery>{
  return this.http.get<Gallery>(`${this.baseURL}/${this.domain}/addimage/${id}` )
}

delete(id:number):Observable<any>{
  return this.http.get(`${this.baseURL}/${this.domain}/delete/${id}`)
}

update(id:number , gallery: FormData):Observable<Object>{
  return this.http.post(`${this.baseURL}/${this.domain}/update/${id}` , gallery )
}

addgallery(formData: FormData): Observable<Object>{
  return this.http.post(`${this.baseURL}/${this.domain}/add`, formData);
}

hide(id: number): Observable<Object>{
  return this.http.get(`${this.baseURL}/${this.domain}/hide/${id}`);
}

show(id: number): Observable<Object>{
  return this.http.get(`${this.baseURL}/${this.domain}/show/${id}`);
}

}
