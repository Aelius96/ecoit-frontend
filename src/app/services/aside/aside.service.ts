import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsideService {
 JSON_PATH ='../../assets/json/'
  constructor(private http :HttpClient) { }
  getAside(fileName : string) : Observable<any> {
    return this.http.get(this.JSON_PATH + fileName)
  }
}
