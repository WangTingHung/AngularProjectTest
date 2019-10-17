import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,} from '@angular/common/http';
import { Region } from './region';
import { Observable }     from 'rxjs/Observable';
// import {BrowserXhr} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class RegionServiceService  {
  private regionsUrl : string;
  // public httpOptions = {
  //   headers: new HttpHeaders({
  //     'Access-Control-Allow-Origin': 'http://localhost:8081/',
  //     'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  //     'Access-Control-Max-Age': '86400'
  //   })
  // };
  constructor(private http:HttpClient) { 
    this.regionsUrl = 'http://localhost:8081/regions';
  }

  public getAllRegion():Observable<Region[]>{
    return this.http.get<Region[]>(this.regionsUrl);
  }
}
