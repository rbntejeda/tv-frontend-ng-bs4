import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Entry } from '../_class/entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  
  base = "entry";

  constructor(private http:HttpClient) { }

  GetAll(params?:HttpParams){
    return this.http.get<Entry[]>(`${environment.endpoint}/${this.base}`,{ params, observe:"response" });
  }
  
  Refresh(params?:HttpParams){
    return this.http.get(`${environment.endpoint}/${this.base}/refresh`,{ params, observe:"response" });
  }

  Sync(params?:HttpParams){
    return this.http.get(`${environment.endpoint}/${this.base}/sync`,{ params, observe:"response" });
  }
}
