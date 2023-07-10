import { Injectable } from '@angular/core';
import {Constant} from "../../core/config/constant";
import {Domain} from "../../core/domain/domain";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hashtag} from "../../core/model/hashtag/hashtag";


@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  private baseUrl = `${Constant.BASE_URL}`;
  private domain = `${Domain.HASHTAG}`
  constructor(private http:HttpClient) { }

  listAllHashtag(): Observable<Hashtag[]>{
    return this.http.get<Hashtag[]>(`${this.baseUrl}/${this.domain}`);
  }

  // filterSuggestions(suggestions: Tag[], tags: Tag[],  filter: string): Tag[] {
  //   const distinct = this.outersect(suggestions, tags, (t: Tag) => t.name);
  //   if (distinct && filter) {
  //     let searchTerm = filter || '*';
  //     searchTerm = searchTerm.endsWith('*') ? searchTerm : searchTerm + '*';
  //     searchTerm = searchTerm.startsWith('*') ? searchTerm : '*' + searchTerm;
  //
  //     const filtered = distinct.filter(d => matcher.isMatch(d, searchTerm));
  //     return suggestions.filter((s: Tag) => filtered.indexOf(s.name) !== -1);
  //   }
  //   return [];
  // }
  //
  // private outersect<T, U>(a: T[], b: T[], mapFn: (value: T, index: number, array: T[]) => U): U[] {
  //   return a.map(mapFn).filter(value => b.map(mapFn).indexOf(value) === -1);
  // }
}
