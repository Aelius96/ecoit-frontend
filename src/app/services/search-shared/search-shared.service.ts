import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Post} from "../../core/model/post/post";

@Injectable({
  providedIn: 'root'
})
export class SearchSharedService {

  private searchResultsSubject: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  public searchResults$: Observable<Post[]> = this.searchResultsSubject.asObservable();

  setSearchResults(results: Post[]): void {
    this.searchResultsSubject.next(results);
  }
}
