import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../../core/config/constant";
import {Observable} from "rxjs";
import {Slider} from "../../core/model/slider/slider";
import {Domain} from "../../core/domain/domain";
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private apiHelper: ApiHelper) { }

  getListAll(): Observable<any>{
    return this.apiHelper.get(Constant.SLIDERS.GET_LIST_ALL);
  }

  getSliders(): Observable<any>{
    return this.apiHelper.get(Constant.SLIDERS.GET_SLIDERS);
  }

  addNew(slider: FormData): Observable<Object>{
    return this.apiHelper.post(Constant.SLIDERS.ADD, slider);
  }

  getById(id: number): Observable<any>{
    return this.apiHelper.get( Constant.SLIDERS.GET_BY_ID +`/${id}`);
  }

  update(id: number, slider: FormData):Observable<any>{
    return this.apiHelper.post( Constant.SLIDERS.UPDATE +`/${id}`,slider);
  }

  hideSlider(id: number): Observable<any>{
    return this.apiHelper.get( Constant.SLIDERS.HIDE_SLIDER + `/${id}`);
  }

  showSlider(id: number): Observable<any>{
    return this.apiHelper.get( Constant.SLIDERS.SHOW_SLIDER +`/${id}`);
  }

  deleteSlider(id: number): Observable<any>{
    return this.apiHelper.delete( Constant.SLIDERS.DELETE_SLIDER +`/${id}`);
  }

  getImage(name: string): Observable<any>{
    return this.apiHelper.get( Constant.SLIDERS.GET_IMAGE +`/${name}`);
  }
}
