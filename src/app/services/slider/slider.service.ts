import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../../core/config/constant";
import {Observable} from "rxjs";
import {Slider} from "../../core/model/slider/slider";

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private baseURL = `${Constant.BASE_URL}`;

  constructor(private http: HttpClient) { }

  getListAll(): Observable<any>{
    return this.http.get(`${this.baseURL}/home/sliders`);
  }

  getSliders(): Observable<any>{
    return this.http.get(`${this.baseURL}/sliders`);
  }

  addNew(slider: FormData): Observable<Object>{
    return this.http.post(`${this.baseURL}/sliders/add`, slider);
  }

  getById(id: number): Observable<Slider>{
    return this.http.get<Slider>(`${this.baseURL}/sliders/${id}`);
  }

  update(id: number, slider: FormData):Observable<Object>{
    return this.http.post(`${this.baseURL}/sliders/update/${id}`,slider);
  }

  hideSlider(id: number): Observable<Object>{
    return this.http.get(`${this.baseURL}/sliders/hide/${id}`);
  }

  showSlider(id: number): Observable<Object>{
    return this.http.get(`${this.baseURL}/sliders/show/${id}`);
  }
}
