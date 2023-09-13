import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Gallery } from 'src/app/core/model/gallery/gallery';
import { Observable, Cons } from 'rxjs';
import { Domain } from 'src/app/core/domain/domain';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor ( private apiHelper : ApiHelper) {  }

  // tImage
  getAllListChangePage(params: Params):Observable<any>{
    return this.apiHelper.get( Constant.GALLERY.GET_ALL_LIST_CHANGE_PAGE , {params});
  }

  getListAll():Observable<Gallery[]>{
    return this.apiHelper.get(Constant.GALLERY.GET_LIST_ALL);
  }
addimageById(id:number):Observable<Gallery>{
  return this.apiHelper.get( Constant.GALLERY.ADD_IMAGE_BY_ID + `/${id}` )
}

getfindbyId(id:number):Observable<Gallery>{
  return this.apiHelper.get( Constant.GALLERY.GET_FIND_BY_ID + `/${id}`)
}

delete(id:number):Observable<any>{
  return this.apiHelper.post( Constant.GALLERY.DELETE + `/${id}`)
}

update(id:number , gallery: FormData):Observable<Object>{
  return this.apiHelper.post( Constant.GALLERY.UPDATE + `/${id}` , gallery )
}
// add
addgallery(formData: FormData): Observable<Object>{
  return this.apiHelper.post( Constant.GALLERY.ADD_GALLERY , formData);
}

hide(id: number): Observable<Object>{
  return this.apiHelper.get( Constant.GALLERY.HIDE + `/${id}`);
}

show(id: number): Observable<Object>{
  return this.apiHelper.get( Constant.GALLERY.SHOW + `/${id}`);
}

}
