import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

import {Shows} from '../models/shows.model'
@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  shows_URL: string="http://api.tvmaze.com/shows"
  search_URL:string="http://api.tvmaze.com/search/shows?q="
  constructor(private http: HttpClient) { }

  getShows(): Observable<Shows[]>{
    return this.http.get<Shows[]>(this.shows_URL, {responseType: 'json'});
  }

  getShowById(id:number):Observable<Shows[]>{
    return this.http.get<Shows[]>(`${this.shows_URL}/${id}`, {responseType: 'json'});
  }

  getSearchByQuery(query:string):Observable<any>{
    return this.http.get<any>(`${this.search_URL}${query}`)
  }

  getCast(id:number):Observable<any>{
    return this.http.get<any>(`${this.shows_URL}/${id}/cast`)
  }

  getSeasons(id:number):Observable<any>{
    return this.http.get<any>(`${this.shows_URL}/${id}/seasons`)
  }
}
