import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Entry } from '../_class/entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  
  base = "playlist";

  constructor(private http:HttpClient) { }

  Get(params?:HttpParams){
    return this.http.get<Entry[]>(`${environment.endpoint}/${this.base}`,{ params, observe:"response" });
  }
}
