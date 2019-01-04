import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Playlist } from '../_class/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  
  base = "playlist";

  constructor(private http:HttpClient) { }

  Get(params?:HttpParams)
  {
    return this.http.get<Playlist[]>(`${environment.endpoint}/${this.base}`,{ params, observe:"response" });
  }

  GetByPk(id:number,params?:HttpParams)
  {
    return this.http.get<Playlist>(`${environment.endpoint}/${this.base}/${id}`,{ params, observe:"response" });
  }
}
