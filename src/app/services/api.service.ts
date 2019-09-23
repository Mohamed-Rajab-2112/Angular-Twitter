import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  apiUrls() {
    return {
      getTweetsByHashtagUrl: environment.baseUrl + 'hashtags/{HASHTAG}',
      getTweetsByUserUrl: environment.baseUrl + 'users/{USER}'
    };
  }

  get(url, pageLimits) {
   return this.httpClient.get(url, this.headers(pageLimits));
  }

  headers(pagesLimit) {

    return {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*'
      }),
      params: new HttpParams().set('pages_limit', pagesLimit)
    } ;
  }

}
