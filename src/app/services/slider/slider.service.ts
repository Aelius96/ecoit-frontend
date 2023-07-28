import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constant} from "../../core/config/constant";
import {Observable} from "rxjs";
import {Slider} from "../../core/model/slider/slider";
import {Domain} from "../../core/domain/domain";

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private baseURL = `${Constant.BASE_URL}`;
  private domain = `${Domain.SLIDERS}`;

  constructor(private http: HttpClient) { }

  getListAll(): Observable<any>{
    return this.http.get(`${this.baseURL}/${this.domain}/home`);
  }

  getSliders(): Observable<any>{
    return this.http.get(`${this.baseURL}/${this.domain}`);
  }

  addNew(slider: FormData): Observable<Object>{
    return this.http.post(`${this.baseURL}/${this.domain}/add`, slider);
  }

  getById(id: number): Observable<Slider>{
    return this.http.get<Slider>(`${this.baseURL}/${this.domain}/${id}`);
  }

  update(id: number, slider: FormData):Observable<Object>{
    return this.http.post(`${this.baseURL}/${this.domain}/update/${id}`,slider);
  }

  hideSlider(id: number): Observable<Object>{
    return this.http.get(`${this.baseURL}/${this.domain}/hide/${id}`);
  }

  showSlider(id: number): Observable<Object>{
    return this.http.get(`${this.baseURL}/${this.domain}/show/${id}`);
  }

  deleteSlider(id: number): Observable<Object>{
    return this.http.get(`${this.baseURL}/${this.domain}/status/${id}`);
  }

  getImage(name: string): Observable<Slider>{
    return this.http.get<Slider>(`${this.baseURL}/${this.domain}/image/${name}`);
  }
}
