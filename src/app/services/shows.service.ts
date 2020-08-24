import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

import {Shows} from '../models/shows.model'
@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  public shows_URL: string="http://api.tvmaze.com/shows"
  public search_URL:string="http://api.tvmaze.com/search/shows?q="
  public constructor(private http: HttpClient) { }

  public getShows(): Observable<Shows[]>{
    return this.http.get<Shows[]>(this.shows_URL)
  }

  public getShowById(id:number):Observable<Shows[]>{
    return this.http.get<Shows[]>(`${this.shows_URL}/${id}`);
  }

  public getSearchByQuery(query:string):Observable<any>{
    return this.http.get<any>(`${this.search_URL}${query}`)
  }

  public getCast(id:number):Observable<any>{
    return this.http.get<any>(`${this.shows_URL}/${id}/cast`)
  }

  public getSeasons(id:number):Observable<any>{
    return this.http.get<any>(`${this.shows_URL}/${id}/seasons`)
  }
}
