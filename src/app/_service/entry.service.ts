import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Entry } from '../_class/entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  
  base = "entry";

  constructor(private http:HttpClient) { }

  Get(params?:HttpParams):Observable<Entry[]>{
    return this.http.get<Entry[]>(`${environment.endpoint}/${this.base}`,{params:params});
  }

  Head(options){
    return this.http.head(`${environment.endpoint}/${this.base}`,options);
  }
}
