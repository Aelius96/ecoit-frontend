import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http:HttpClient) { }
  JSON_PATH ='../../assets/json/'
  getModule(fileName : string) : Observable<any> {
    return this.http.get(this.JSON_PATH + fileName)
  }
}
