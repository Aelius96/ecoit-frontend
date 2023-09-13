import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private apiHelper : ApiHelper) { 
  }
  getListHis():Observable<any>{
    return this.apiHelper.get(Constant.HISTORY.GET_LIST_HISTORY)
  }
}
